#!/bin/bash

# Navigate to the project directory
cd "$(dirname "$0")"

# Remove orphan containers and stop all services
docker-compose down --remove-orphans

# Pull the latest images (if applicable)
docker-compose pull

# Rebuild the Docker images without forcing prune
docker-compose build

# Start the Docker containers
docker-compose up -d

# Check the status of the containers
docker-compose ps
