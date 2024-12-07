# Frontend

## Ports

Main backend ip is 5000:<br>

- AuthService - 5001
- UserService - 5002
- MessagesService - 5003
- SupportService - 5004
- Mongo - 5100
- PostgreSQLAuth - 5200
- RabbitMQ - app: 5300, managment 5301
- Redis - 5400
- LoadBalancer - 5500 ?

## User roles
- 0 child -18
- 1 child +18
- 2 admin
- 3 superadmin


## API

### AuthService

- localhost:5001/api/v2/login POST
- localhost:5001/api/v2/refresh POST
- localhost:5001/api/v2/verify POST
- localhost:5001/api/v2/approve POST

### MessagesService




### UserService

