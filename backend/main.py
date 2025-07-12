from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins = ["http://localhost:5173"],
    allow_methods = ["POST"],
    allow_headers = ["*"]
)

class ChatRequest(BaseModel):
    query: str

@app.get("/")
def healthcheck():
    return "Backend is running properly"

@app.post("/chat")
def chat(request: ChatRequest):
    return f"You asked: ${request.query}"