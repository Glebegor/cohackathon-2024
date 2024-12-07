
docker build --build-arg NODE_ENV=prod -t user-service . 

docker run -p 5002:5002 user-service