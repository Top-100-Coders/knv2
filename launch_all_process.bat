start cmd.exe /k "cd beckn_implementation\BAP && docker-compose up"
start cmd.exe /k "cd beckn_implementation\BPP && docker-compose up"
start cmd.exe /k "npx lt --port 5002 -s knv2-bap"
start cmd.exe /k "npx lt --port 5012 -s knv2-bpp"
timeout /t 10 /nobreak
start cmd.exe /k "cd beckn_implementation\BAP\client && npm run dev"
start cmd.exe /k "cd beckn_implementation\BAP\network && npm run dev"
start cmd.exe /k "cd beckn_implementation\BPP\client && npm run dev"
start cmd.exe /k "cd beckn_implementation\BPP\network && npm run dev"