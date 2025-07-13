# AI Question Answer 4

## Milestone Reached

- [x] Put a simple website up

  In 2021 I started learning software development with khan academy with the goal of wanting to make a simple website end to end, and it was one of my resolutions for this year to do it.

  Earlier this year I tried to speed run this in a weekend and got caught at docker and docker-compose locally, confused at what vite, caddy, and other tools were and why it wasn't so simple as FE + BE + upload somewhere.
  
  Other weekends I tried to take that and put it on AWS but couldn't get it running smooth.
  
  Today (2025-07-13) **I did it**.

##

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
- [x] add HTTPS with Let's Encrypt
- [ ] add CI/CD with Github Actions

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
- nginx outside of docker for adding https, means docker compose needs to expose FE and BE ports, and FE url needs https
- certbot used on VPS to cert-up the nginx config, then cp those changes to local nginx, push to github - adding https isn't lines of code in e.g. BE

Extras:

- added healthcheck get endpoint
- with OpenAI() automatically will use api key so long as I loaddotenv()
- added restart: always to docker compose so when VPS reboots, docker-compose will run
