build-and-deploy-frontend:
	docker build -f Dockerfile.frontend -t frontend . ;\
	docker run -it --rm -p 8080:8080 --name roster-frontend -v ${PWD}/frontend:/home/node/app frontend

build-and-deploy-frontend-exec:
	docker build -f Dockerfile.frontend -t frontend . ;\
	docker run -it --rm -p 8080:8080 --name roster-frontend -v ${PWD}/frontend:/home/node/app frontend sh