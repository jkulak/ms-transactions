# Install

`docker-compose up --build`

Run in background (daemon mode)

`docker-compose up -d --build`

# Debug

`docker exec -ti ms-transactions-app sh -l`

Display app logs

`docker exec -ti ms-transactions-app ./node_modules/.bin/pm2 logs 0`
`docker exec -ti ms-transactions-app ./node_modules/.bin/pm2 monit 0`

# API documentation

Postman auto-generated documentation

https://documenter.getpostman.com/view/2770103/ms-transactions/RVftmCXD
