


run-def:
	cp ./src/config/.dev.env ./.env
	cp ./src/config/config.dev.json ./src/config/config.json
	docker build -t auth-service .
	docker run --name=auth-service --network hackathon-network -p 5001:5001 --rm -d auth-service

run-prod: 
	cp ./src/config/.prod.env ./.env
	cp ./src/config/config.prod.json ./src/config/config.json
	docker build -t auth-service .
	docker run --name=auth-service --network hackathon-network -p 5001:5001 --rm auth-service
	
