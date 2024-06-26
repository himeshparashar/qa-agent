import os

from q_gen.question_gen import questions_gen
from fastapi import FastAPI
from ingestor import ingestor
from dotenv import load_dotenv
from dataIngestor import  ingestor

load_dotenv()
app = FastAPI()


# os.environ['OPENAI_API_KEY']=os.getenv("OPENAI_API_KEY")

response = questions_gen("Maths", "The sum of two numbers is 10. If one number is 2 times the other, find the numbers.", "easy")

print(response)
app.include_router(ingestor.router)