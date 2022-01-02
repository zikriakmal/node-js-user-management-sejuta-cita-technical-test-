# Technical test sejuta cita backend

# How to deploy on development

## initial project
- Pull this project
- install docker
- install docker-compose
- cp .env.example to .env
## run docker container
- docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build 
## to seed admin and user data
- docker exec -it sejuta-cita-node_sejuta-cita-node-app_1 node seed/usersSeed.js
## default development
- port : 3000

# Credential
## admin
- email : "admin@sejutacita.com"
- password : "admin"
## user
- email : "user1@sejutacita.com"
- password : "user"

# deployed api
- site : https://sejutacita.zikriakmal.my.id

# description
this project run on 1 image thas has built on dockerfile and  1 image from dockerhub mongodb running on 2 container 

### developed by : zikri akmal