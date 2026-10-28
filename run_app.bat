@echo off
echo ========================================================
echo Launching Skill Bloom - Peer-to-Peer College Learning
echo Tagline: "Share Your Skills. Grow Together."
echo ========================================================
start "Skill Bloom Backend" cmd /k "run_backend.bat"
timeout /t 3 /nobreak >nul
start "Skill Bloom Frontend" cmd /k "run_frontend.bat"
echo Applications launched in separate windows!
echo Backend:  http://127.0.0.1:8000
echo Frontend: http://localhost:5173
echo API Docs: http://127.0.0.1:8000/docs
