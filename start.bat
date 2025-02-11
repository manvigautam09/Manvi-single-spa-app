@echo off
echo Killing existing processes on ports 9000, 8081, and 8082...
for /f "tokens=5" %%a in ('netstat -aon ^| find ":9000" ^| find "LISTENING"') do taskkill /f /pid %%a
for /f "tokens=5" %%a in ('netstat -aon ^| find ":8081" ^| find "LISTENING"') do taskkill /f /pid %%a
for /f "tokens=5" %%a in ('netstat -aon ^| find ":8082" ^| find "LISTENING"') do taskkill /f /pid %%a

echo Starting all applications...
start "Root Config" cmd /c "npm start --prefix . -- --env isLocal=true isDevelopment=true"
start "Home App" cmd /c "npm start --prefix home -- --env isLocal=true isDevelopment=true"
start "Profile App" cmd /c "npm start --prefix profile -- --env isLocal=true isDevelopment=true"

echo All applications started. Access the dashboard at http://localhost:9000 