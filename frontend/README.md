# roster-app

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


--> um den Dockercontainer zu bauen und zu starten muss das Makefile angestoßen werden:
MIT:    make build-and-deploy-frontend


Als Info hinzu schreiben, dass diese beiden Podman sachen benötigt werden:
brew install podman-compose podman
ODER
brew install docker-compose docker

Mit dem Compose-File würde man es so ausführen:
 podman compose up --build 
ODER
 docker compose up --build
