apply-kuber-config:
	kubectl apply -f app-deployment.yaml
	kubectl apply -f app-service.yaml
	kubectl apply -f app-configmap.yaml

create-cluster-databases:
	minikube start -p cluster1-rabbitmq
	minikube start -p cluster2-databases
	minikube start -p cluster3-core

swiTo1:
	minikube config set current-context cluster1-rabbitmq
swiTo2:
	minikube config set current-context cluster2-databases
swiTo3:
	minikube config set current-context cluster3-core

status:
	minikube status -p cluster1
	minikube status -p cluster2
	minikube status -p cluster3