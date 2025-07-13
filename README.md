# AI Question Answer 4

This time around the goal of the project is to:

- [x] setup basic FE with Vite + React + Typescript + TailwindCSS + ShadCN + Lucide
- [x] setup basic BE with Python + FastAPI + uvicorn
- [x] add .env for API keys
- [x] FE make an UI ask questions to an LLM
- [x] add .env for API url
- [x] connect FE to BE with fetch
- [x] FE make a UI for a password
- [x] password protect the endpoint
- [x] BE add API call to LLM
- [x] add basic rate limiting to endpoint
- [x] setup separate docker for FE and BE
- [x] setup docker-compose
- [x] setup a reverse proxy with nginx
- [ ] setup VPS and domain pointing
- [ ] deploy to VPS without HTTPS
- [ ] add HTTPS with Let's Encrypt

Notes:

- missed imports on add tailwind to vite.config, fast was skipping to shadCN install guide, already covers tailwindcss
- first push to git miss because forgot to commit
- BE response needs to be JSON, not string
- struggled with writing FE fetch, some struggle with handlekeydown, setting functions in components
- forgot status handling on FE, BE setup
- format of OpenAI forgotten
- learned environ[] vs getenv()
- docker-compose.yml just for testing that dockerfiles would work in prod, not to use in dev
- nginx right now seems just to test scenario where FE and BE on one server

Extras:

- added healthcheck get endpoint
- with OpenAI() automatically will use api key so long as I loaddotenv()
