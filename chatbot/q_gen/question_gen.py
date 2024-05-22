from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain
import ast
from llm.llm import get_llm

def questions_gen(topic:str, context:str, level:str):
    llm = get_llm()
    template = """Use the following pieces of context to generate 5 {level} question based on the topic in the context
              for evaluation of a student as an array.
              also mention the level of question as easy medium and hard.

    {context}

    Topic: {topic}

    Helpful Answer:"""
    prompt = PromptTemplate.from_template(template)

    question_chain = LLMChain(
        llm=llm,
        prompt=prompt,
        verbose=True,
        output_key="output"
    )

    res = question_chain.invoke(
        {"level": level, "context": context, "topic": topic},
    )

    return res["output"]

