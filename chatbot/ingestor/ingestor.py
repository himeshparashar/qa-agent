from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter



class ingestor:

    def doc_loader(self, doc_name: str):
        loader=PyPDFLoader(doc_name)
        docs=loader.load()
        return docs
    
    def text_splitter(self, docs: list):
        text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
        splits = text_splitter.split_documents(docs)