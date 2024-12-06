
db-run-postgres:
	docker run --name="hackathon-mongo" -e MONGO_INITDB_ROOT_USERNAME="root" -e MONGO_INITDB_ROOT_PASSWORD="123321" -d --rm -p 5002:27017  mongo 
db-stop-postgres:
	docker stop hackathon-mongo

db-run-mongodb:
	docker run --name="hackathon-postgres" -e POSTGRES_USER="root" -e POSTGRES_PASSWORD="123321" -d --rm -p 5001:5432 postgres
db-stop-mongodb:
	docker stop hackathon-postgres