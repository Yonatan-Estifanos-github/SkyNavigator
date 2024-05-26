#!/bin/bash

# Navigate to the project directory
cd "$(dirname "$0")"

# Remove orphan containers and stop all services
docker-compose down --remove-orphans

# Prune Docker system
docker system prune -a --volumes -f

# Rebuild the Docker images
docker-compose build

# Start the Docker containers
docker-compose up -d

# Check the status of the containers
docker-compose ps
