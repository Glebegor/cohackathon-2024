#!/bin/bash

# Get the current working directory
path=$(pwd)

# Define the list of services using the correct variable reference
services=("${path}/backend/AuthService" "${path}/backend/UserService")

# Flag for tracking test failures
test_failed=false

# Iterate over each microservice
for service in "${services[@]}"; do
    echo "Running tests for $service..."
    
    # Navigate to the service's test directory and run tests
    (cd "$service" && npm run test)
    
    # Check the result of the tests
    if [ $? -ne 0 ]; then
        echo "Tests failed for $service"
        test_failed=true
    else
        echo "Tests passed for $service"
    fi
done

# Final message based on test results
if [ "$test_failed" = true ]; then
    echo "One or more services have failing tests. Exiting with error."
    exit 1
else
    echo "All tests passed successfully!"
    exit 0
fi
