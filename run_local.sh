#!/bin/bash

# Function to open a new terminal and run a command
run_in_new_terminal() {
  local cmd=$1
  osascript <<END
  tell application "Terminal"
    do script "$cmd"
  end tell
END
}

# Start backend
run_in_new_terminal "cd $(pwd)/SkyNavigatorBackend && dotnet run"

# Start frontend
run_in_new_terminal "cd $(pwd)/sky-navigator && npm start"
