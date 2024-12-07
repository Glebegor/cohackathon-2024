


docker build --build-arg NODE_ENV=prod -t auth-service . 

docker run --name="auth-service" \
  --network hackathon-network \
  -p 5001:5001 \
  -e DATABASE_URL="postgresql://root:123321@hackathon-postgres:5432/postgres" \
  auth-service