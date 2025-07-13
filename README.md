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
- [x] setup VPS
- [x] deploy to VPS
- [x] connect VPS to domain name
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
- host server RAM too small, had to make swapfile so build could run
- made user, set up ssh to access github, clone repo
- had to make prod docker compose to proper address for frontend to contact, point FE to server address
- nginx redirect www to @ since www call to @ was hitting CORS

Extras:

- added healthcheck get endpoint
- with OpenAI() automatically will use api key so long as I loaddotenv()
- added restart: always to docker compose so when VPS reboots, docker-compose will run
