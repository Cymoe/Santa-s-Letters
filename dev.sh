#!/bin/bash

# Start Pocketbase in the background
cd pb && ./pocketbase serve &
PB_PID=$!

# Start the frontend
cd .. && npm run dev &
VITE_PID=$!

# Wait for either process to exit
wait $PB_PID $VITE_PID

# Kill both processes on exit
trap "kill $PB_PID $VITE_PID" EXIT
