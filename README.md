# MEVN stack
# Roster-App

## What you need to start the app
```
Installation of podman and podman-compose
or
Installation of docker and docker-compose
```
## What to do next
```
Now you need to clone the git-repo into your local machine
git clone git@github.com:Insa1608/WebDevelopment.git
```

## Now start the app
```
To start the app you use the compose file in the root folder.
The needed commands are:
podman compose up --build 
ODER
 docker compose up --build
(it depends if you installed docker or podman here !)
```





## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Run "npx nodemon" in the backend part of the project !!!

### Another opportunity is to use the Makefile to build the app. But here you need to write multiple commands to the command-line to start frontend and backend and make them communicate with each other
--> um den Dockercontainer zu bauen und zu starten muss das Makefile angestoßen werden:
MIT:    make build-and-deploy-frontend

