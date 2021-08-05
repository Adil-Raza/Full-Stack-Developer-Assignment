# Full Stack Developer Assignment

### Requirements
* Postgres locally installed in running on port `3306` and password `qwerty`
* NodeJS installed on machine
* Docker
* Kubernetes Cluster (kubectl tool: to interact to cluster)

## Setup DB
* Expecute query given inside `database/database.sql` to create the database and users table

## setting up project
* Run `npm install` to install all dependencies


## Run without docker
### Debugging app
* Run `npm run dev`


### Build app
* Run `npm start`


## Run with docker
* `docker build . -t <your username>/ASSIGNMENT`
* `docker run -p 5000:5000 -d <your username>/ASSIGNMENT`

## Deployment in Kubernetes
* `kubectl create -f deploy.yaml` creating yaml file for deployment
* `kubectl expose deployment nodejs-deployment --type="LoadBalancer"`. This is to expose the deployment with loadbalancer
* `kubectl get svc`. This gives the IP address of loadbalancer through which node app could be accessed

