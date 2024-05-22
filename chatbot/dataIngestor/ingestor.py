import os
import shutil

from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from fastapi import FastAPI, File, UploadFile, APIRouter
from starlette.responses import JSONResponse

app = FastAPI()
router = APIRouter()
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
    if file.content_type != "application/pdf":
        return JSONResponse(status_code=400, content={"message": "File type not supported. Only PDF files are allowed."})

    file_location = os.path.join(UPLOAD_DIRECTORY, os.path.basename(file.filename))

    with open(file_location, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    ingestor_instance = ingestor()
    docs = ingestor_instance.doc_loader("uploaded_files/" + file.filename)
    print(docs)

    docs_splits = ingestor_instance.text_splitter(docs)

    print(docs_splits)

    return {"filename": os.path.basename(file.filename), "location": file_location}


