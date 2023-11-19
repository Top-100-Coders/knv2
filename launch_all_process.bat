start cmd.exe /k "cd beckn_implementation\BAP && docker-compose up"
start cmd.exe /k "cd beckn_implementation\BPP && docker-compose up"
timeout /t 40 /nobreak
start cmd.exe /k "cd beckn_implementation\BAP\client && npm run dev"
start cmd.exe /k "cd beckn_implementation\BAP\network && npm run dev"
start cmd.exe /k "cd beckn_implementation\BPP\client && npm run dev"
start cmd.exe /k "cd beckn_implementation\BPP\network && npm run dev"
start cmd.exe /k "cd beckn_implementation\BPP\webhook && npm start dev"
timeout /t 10 /nobreak
start cmd.exe /k "npx lt --port 5002 -s knv2-bap-network"
start cmd.exe /k "npx lt --port 5012 -s knv2-bpp-network"
start cmd.exe /k "npx lt --port 5003 -s knv2-bap-client"
start cmd.exe /k "npx lt --port 5013 -s knv2-bpp-client"