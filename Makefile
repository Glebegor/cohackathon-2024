
# Dev
db-run-mongo-dev:
	docker run --name="hackathon-mongo" -e MONGO_INITDB_ROOT_USERNAME="root" -e MONGO_INITDB_ROOT_PASSWORD="123321" -d --rm -p 5002:27017  mongo 
db-stop-mongo-dev:
	docker stop hackathon-mongo

db-run-postgres-dev:
	docker run --name="hackathon-postgres" -e POSTGRES_USER="root" -e POSTGRES_PASSWORD="123321" -d --rm -p 5001:5432 postgres
db-stop-postgres-dev:
	docker stop hackathon-postgres

db-run-all-dev: 
	make db-run-mongo-dev || true
	make db-run-postgres-dev || true
db-stop-all-dev: 
	make db-stop-mongo-dev || true
	make db-stop-postgres-dev || true