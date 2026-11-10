@echo off
cd /d "%~dp0"
where python >nul 2>nul
if errorlevel 1 (
  echo Python wurde nicht gefunden. Alternativ VS Code Live Server verwenden.
  pause
  exit /b 1
)
echo PokeScan: http://127.0.0.1:8080
start "" "http://127.0.0.1:8080"
python -m http.server 8080 --bind 127.0.0.1
pause
