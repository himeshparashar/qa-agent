from fastapi import APIRouter

answering_router = APIRouter()

@answering_router.get("/uploadfile/")
async def answered(answer: str):
    