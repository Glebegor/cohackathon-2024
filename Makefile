
# db mongo dev
db-run-mongo-dev:
	docker network create hackathon-network || true
	docker run --name="hackathon-mongo" --network hackathon-network -e MONGO_INITDB_ROOT_USERNAME="root" -e MONGO_INITDB_ROOT_PASSWORD="123321" -d --rm -p 5100:27017  mongo 
db-stop-mongo-dev:
	docker stop hackathon-mongo

# db postgres dev
db-run-postgres-dev:
	docker network create hackathon-network || true
	docker run --name="hackathon-postgres" --network hackathon-network -e POSTGRES_USER="root" -e POSTGRES_PASSWORD="123321" -d --rm -p 5200:5432 postgres
db-stop-postgres-dev:
	docker stop hackathon-postgres

# Db run dev
db-run-all-dev: 
	make db-run-mongo-dev || true
	make db-run-postgres-dev || true

db-stop-all-dev: 
	make db-stop-mongo-dev || true
	make db-stop-postgres-dev || true

# rabbitmq run dev

rabbitmq-run-dev:
	docker run -it --rm --name rabbitmq -p 5300:5672 -p 5301:15672 --rm -d rabbitmq:3.13-management

rabbitmq-run-dev:
	docker stop hackathon-rabbitmq