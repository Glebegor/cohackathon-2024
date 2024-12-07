

# wait-db-ready:
# 	@until pg_isready -h  -p 5432 -U $(DB_NAME); do \
# 		echo "Waiting for PostgreSQL to be ready..."; \
# 		sleep 2; \
# 	done

run-prod: 
# wait-db-ready
	npx prisma migrate dev	
	node dist/index.js
	