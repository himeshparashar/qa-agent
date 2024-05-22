from chatbot.llm import get_llm
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate


class userlevel:

    def get_user_level(self, userid: str, answer: str):
        llm = get_llm()
        # Notice that "chat_history" is present in the prompt template
        template = """
        "analyse the answer given by the user to the question and 
        analyse which level should be asked to user according to the 
        correctness of the answer given in only one world from 
        'EASY', 'MEDIUM','HARD'"\n
        chat history: {chat}
        Response:"""
        prompt = PromptTemplate.from_template(template)
        conversation = LLMChain(
            llm=llm,
            prompt=prompt,
            verbose=True,
        )
        res = conversation({"chat": answer})
        return res["text"]