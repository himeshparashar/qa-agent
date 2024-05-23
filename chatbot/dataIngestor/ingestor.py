import os
import shutil

from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from fastapi import FastAPI, File, UploadFile, APIRouter
from starlette.responses import JSONResponse
from langchain_community.embeddings import HuggingFaceBgeEmbeddings
from pydantic import BaseModel
from langchain.vectorstores import Qdrant
from qdrant_client import QdrantClient, models
import requests
import fitz


app = FastAPI()
router = APIRouter()

model_name = "BAAI/bge-large-en"
model_kwargs = {'device': 'cpu'}
encode_kwargs = {'normalize_embeddings': False}
embeddings = HuggingFaceBgeEmbeddings(
    model_name=model_name,
    model_kwargs=model_kwargs,
    encode_kwargs=encode_kwargs
)

class UserData(BaseModel):
    pdf_url: str
    collection_name: str
class ingestor:

    def doc_loader(self, doc_name: str):
        loader=PyPDFLoader(doc_name)
        docs=loader.load()
        return docs
    
    def text_splitter(self, docs: list):
        text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
        splits = text_splitter.split_documents(docs)
        return splits


UPLOAD_DIRECTORY = "dataIngestor/uploaded_files"

if not os.path.exists(UPLOAD_DIRECTORY):
    os.makedirs(UPLOAD_DIRECTORY)
@router.post("/upload-pdf/")
async def upload_pdf(file: UploadFile = File(...)):
    print("saurabh+++++++++++++++++++++++++++")
    if file.content_type != "application/pdf":
        return JSONResponse(status_code=400, content={"message": "File type not supported. Only PDF files are allowed."})

    file_location = os.path.join(UPLOAD_DIRECTORY, os.path.basename(file.filename))

    with open(file_location, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    ingestor_instance = ingestor()
    print("+++++++++++++++++++++++++++++++++++++++++++++++++++++")
    print(file.filename)
    docs = ingestor_instance.doc_loader("uploaded_files/" + os.path.basename(file.filename))
    print(docs)

    docs_splits = ingestor_instance.text_splitter(docs)

    print(docs_splits)

    return {"filename": os.path.basename(file.filename), "location": file_location}


@router.post("/create-pdf-database/")
async def create_item(userData: UserData):
    try:
        pdf_url = userData.pdf_url
        response = requests.get(pdf_url)
        # Save the PDF content to a temporary file
        with open("temp.pdf", "wb") as temp_file:
            temp_file.write(response.content)

        # Open the temporary PDF file with PyMuPDF
        pdf_document = fitz.open("temp.pdf")

        # Read the text from each page and save it in a variable
        pdf_text = ""
        for page_num in range(pdf_document.page_count):
            page = pdf_document[page_num]
            pdf_text += page.get_text()


        loader = PyPDFLoader("temp.pdf")
        docs = loader.load()
        text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
        splits = text_splitter.split_documents(docs)

        # Close the PDF document
        pdf_document.close()

        url = "http://localhost:6333"
        qdrant = Qdrant.from_documents(
            splits,
            embeddings,
            url=url,
            prefer_grpc=False,
            collection_name=userData.collection_name
        )

        return f"qdrant vector database of name {userData.collection_name} created successfully "

    except Exception as e:
        return f"Error while creating the vector database: {e}"


