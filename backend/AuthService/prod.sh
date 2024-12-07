
docker build --build-arg NODE_ENV=prod -t auth-service . 

docker run -p 5001:5001 auth-service