import os

from chatbot import ingestor
# from dotenv import load_dotenv
# load_dotenv()


os.environ['OPENAI_API_KEY']=os.getenv("OPENAI_API_KEY")



ingestor.doc_loader("test.pdf")