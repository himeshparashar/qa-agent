from langchain_chroma import Chroma
import openai
from fastapi import HTTPException
from langchain.embeddings import OpenAIEmbeddings

import os
from dotenv import load_dotenv
load_dotenv()


embedding_model = os.getenv("EMBEDDING_MODEL")

os.environ['OPENAI_API_KEY']=os.getenv("OPENAI_API_KEY")

class embedding:

    def create_embeddings(texts):
        try:
            res = openai.embeddings.create(input=texts, model=embedding_model)
            for record in res.data:
                embeds = record.embedding
            return embeds
        except Exception as e:
            print(e)
            error_message = str(e)
            raise HTTPException(status_code=400, detail=error_message)

    def embedder(self, splits: str):
        vectorstore = Chroma.from_documents(documents=splits, embedding=OpenAIEmbeddings())
        retriever = vectorstore.as_retriever()
        return retriever