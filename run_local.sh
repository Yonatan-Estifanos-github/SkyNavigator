#!/bin/bash

# Run both frontend and backend concurrently
concurrently --kill-others-on-fail \
  "cd SkyNavigatorBackend && dotnet run" \
  "cd sky-navigator && npm start"
