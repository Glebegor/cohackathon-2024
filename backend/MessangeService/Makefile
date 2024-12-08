

run:
	go run cmd/main.go

test:
	go get -t ./...
	go test -v ./...


run-dev:
	cp ./config/config.dev.yml ./config/config.yml
	cp ./config/.dev.env ./.env
	docker build -t messservice-hack .
	docker run --network hackathon-network --rm -d -p 5003:5003 messservice-hack

run-prod:
	cp ./config/config.prod.yml ./config/config.yml
	cp ./config/.prod.env ./.env
	docker build -t messservice-hack .
	docker run --network hackathon-network --rm -d -p 5003:5003 messservice-hack
