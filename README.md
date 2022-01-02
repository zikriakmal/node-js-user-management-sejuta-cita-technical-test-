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
- docker exec -it sejuta-cita-node_sejuta-cita-node-app_1(depends on container has built) node seed/usersSeed.js
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

# API DOCUMENTATION
https://www.postman.com/galactic-sunset-198236/workspace/zikri-akmal-personal/request/16911300-58c11171-e37e-40c8-858b-b2b148b1ced1
- add environment variable which are 
    - base_url : https://sejutacita.zikriakmal.my.id/
    - access_token : (with auth token after login) (this wrapped on secured route wrapper)

### developed by : zikri akmal