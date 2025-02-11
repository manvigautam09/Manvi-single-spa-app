#!/bin/bash

# Store the root directory
ROOT_DIR="$(pwd)"

# Kill existing processes on the ports
echo "Killing existing processes on ports 9000, 8081, and 8082..."
lsof -ti:9000,8081,8082 | xargs kill -9 2>/dev/null || true

# Function to cleanup background processes
cleanup() {
    echo "Cleaning up processes..."
    pkill -P $$
    exit
}

# Set up trap to cleanup on script exit
trap cleanup EXIT INT TERM

# Export environment variables
export NODE_ENV=development

# Start the root config
cd "$ROOT_DIR" && npm start -- --env isLocal=true isDevelopment=true &

# Start the home application
cd "$ROOT_DIR/home" && npm start -- --env isLocal=true isDevelopment=true &

# Start the profile application
cd "$ROOT_DIR/profile" && npm start -- --env isLocal=true isDevelopment=true &

# Wait for all background processes
wait 