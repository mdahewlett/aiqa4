import os
from dotenv import load_dotenv
from fastapi import FastAPI, Header, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

load_dotenv()
PASSWORD = os.getenv("PASSWORD")

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
def chat(request: ChatRequest, x_api_key: str = Header(None)):
    if x_api_key != PASSWORD:
        raise HTTPException(status_code=401, detail="Unauthorized")
    
    return {"response": f"You asked: {request.query}"}