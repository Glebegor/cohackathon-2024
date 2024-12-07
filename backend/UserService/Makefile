
run-dev:
	cp ./src/config/.dev.env ./.env
	cp ./src/config/config.dev.json ./src/config/config.json
	docker build -t userservice-hack.
	docker run --network hackathon-network --rm -d -p 5002:5002 userservice-hack

run-prod:
	cp ./src/config/.prod.env ./.env
	cp ./src/config/config.prod.json ./src/config/config.json
	docker build  -t userservice-hack .
	docker run --network hackathon-network --rm -d -p 5002:5002 userservice-hack
