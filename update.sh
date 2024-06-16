#!/bin/bash

# Navigate to the project directory
cd "$(dirname "$0")"

# Remove orphan containers and stop all services
docker-compose down --remove-orphans

# Remove all stopped containers
docker container prune -f

# Remove all dangling images
docker image prune -f

# Remove all unused volumes
docker volume prune -f

# Remove all unused networks
docker network prune -f

# Build the Docker images with specific version tags
docker-compose build

# Explicitly tag the new images with a new version
docker tag skynavigator_backend backend:0.0.1
docker tag skynavigator_frontend frontend:0.0.1

# Start the Docker containers
docker-compose up -d

# Check the status of the containers
docker-compose ps
