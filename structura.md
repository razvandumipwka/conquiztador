       +-------------------+            +---------------------+
       |                   |            |                     |
       |     Frontend      |  <------>  |     Backend API     |
       |  (React + JS/TS)  |  REST/WS   | (Node.js + Express) |
       |                   |            |                     |
       +-------------------+            +---------------------+
                |                                  |
                |                                  |
                v                                  v
        +----------------+              +----------------------+
        |   Map Engine   |              |  Real-time Engine    |
        | (Leaflet.js /  | <----------> |   (Socket.IO)        |
        |   custom SVG)  |              +----------------------+
                |
                v
       +--------------------+
       |  Game UI / Logic   |
       | (quizzes, players) |
       +--------------------+
                |
                v
        +----------------+
        |  Auth System   |
        | (login/user db)|
        +----------------+
                |
                v
       +------------------+
       |  Database Layer  |
       | PostgreSQL / Mongo|
       +------------------+
