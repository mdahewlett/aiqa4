import os
from dotenv import load_dotenv
from fastapi import FastAPI, Header, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from openai import OpenAI
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded

load_dotenv()
PASSWORD = os.environ["PASSWORD"]

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins = ["http://localhost:5173"],
    allow_methods = ["POST"],
    allow_headers = ["*"]
)

limiter = Limiter(key_func=get_remote_address)
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler) # type: ignore

client = OpenAI()
class ChatRequest(BaseModel):
    query: str

@app.get("/")
def healthcheck():
    return "Backend is running properly"

@app.post("/chat")
@limiter.limit("5/minute")
def chat(request: Request, body: ChatRequest, x_api_key: str = Header(None)):
    if x_api_key != PASSWORD:
        raise HTTPException(status_code=401, detail="Unauthorized")
    
    completion = client.chat.completions.create(
        model="gpt-4.1-nano-2025-04-14",
        messages=[
            {
                "role": "user",
                "content": body.query
            }
        ]
    )

    response = completion.choices[0].message.content

    return {"response": response}