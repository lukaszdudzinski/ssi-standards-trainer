#!/bin/bash
cd "$(dirname "$0")"

clear
echo "================================================================="
echo "   SSI Standards Trainer - Uruchamianie Trenażera Standardów"
echo "================================================================="
echo ""
echo " 🐳 Uruchamianie bezpiecznego serwera lokalnego..."

PORT=8000

# Check if the port is already in use and release it if necessary
PID=$(lsof -t -i:$PORT)
if [ ! -z "$PID" ]; then
  echo " 🔄 Port $PORT jest zajęty, restartowanie..."
  kill -9 $PID > /dev/null 2>&1
  sleep 0.5
fi

# Run python built-in HTTP server in background
python3 -m http.server $PORT > /dev/null 2>&1 &
SERVER_PID=$!

echo " 🚀 Serwer HTTP działa pod adresem: http://localhost:$PORT"
echo " 🌐 Otwieram aplikację w domyślnej przeglądarce..."
echo ""
echo " [WAŻNE]: Serwer lokalny jest wymagany, aby działały:"
echo "          - Rozpoznawanie głosu (Speech API)"
echo "          - Instalacja jako aplikacja na pulpit (PWA)"
echo "          - Działanie offline"
echo ""
echo " ❌ Aby wyłączyć serwer, zamknij to okno lub naciśnij Ctrl+C."
echo "================================================================="

# Wait 1 second and open default browser
sleep 1
open "http://localhost:$PORT"

# Handle clean exit of background process on exit/Ctrl+C
trap "echo -e '\nZamykanie serwera...'; kill $SERVER_PID; exit" INT TERM EXIT
wait
