# 3 microservices with 3 tests each
# MessagesService
# UserService
# AuthService

# Each has command: npm test

services=("AuthService" "UserService" "MessagesService")

for service in "${services[@]}"; do
    echo "Running tests for $service..."
    (cd "/Users/glebegor/Programming/projects/my/cohackathon-2024/backend/$service" && npm test)
    if [ $? -ne 0 ]; then
        echo "Tests failed for $service"
        exit 1
    fi
done

echo "All tests passed successfully!"