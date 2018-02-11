# Install

`docker-compose up --build`

Run in background (daemon mode)

`docker-compose up -d --build`

# Debug

`docker exec -ti ms-transactions-app sh -l`

Display app logs

`docker exec -ti ms-transactions-app ./node_modules/.bin/pm2 logs 0`

# API documentation

https://documenter.getpostman.com/collection/view/2770103-00431e24-8e9a-541c-7292-dd0519b3dc35
