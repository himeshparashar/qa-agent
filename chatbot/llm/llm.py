from langchain_openai import ChatOpenAI
import os

def get_llm(model:str='gpt-3.5-turbo')->ChatOpenAI:
    llm = ChatOpenAI(
        model=model, 
        api_key=os.environ["OPENAI_API_KEY"],
        max_tokens=3000,
        temperature=0.7
    )
    return llm