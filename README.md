PAS CU PAS – CE VOM CONSTRUI
🔹 1. Frontend (React + Leaflet.js)
Pagina de autentificare (login/register)

Ecran lobby (alegi jocul, vezi alți jucători)

Hartă interactivă (cu țări clicabile)

UI întrebări și răspunsuri

Animații pentru cuceriri

🔹 2. Backend (Node.js + Express)
API pentru useri (login/register)

API pentru întrebări (GET, POST)

Logica de joc (rundă, scoruri, control teritorii)

🔹 3. WebSocket (Socket.IO)
Conectare la joc în timp real

Evenimente: "jucător a răspuns", "țară cucerită", "start rundă"

Sincronizare între jucători

🔹 4. Baza de date (PostgreSQL sau MongoDB)
Tabele/colecții:

users (cu scoruri)

games (stare joc)

territories (cine controlează ce)

questions (cu dificultate, răspunsuri etc.)

🔹 5. Mapă + Logică teritorii
Hartă SVG sau Leaflet

Cod pentru determinarea teritoriilor controlate

Vecinătăți între țări (ca să știi unde poți ataca)

🔹 6. Sistem de quiz
Întrebări randomizate, cu temporizator

Răspunsuri multiple

Punctaj pe răspuns corect și timp