npm create vite@latest conquiztador -- --template react-ts
cd conquiztador
npm install
npm run dev

npm install react-router-dom
npm install react-icons 
.
----



conquiztador/
├── public/
├── src/
│   ├── assets/             # imagini, hărți SVG etc.
│   ├── components/         # componente UI (Navbar, Map, QuestionCard)
│   ├── pages/              # pagini (Login, Lobby, Game)
│   ├── services/           # apeluri la API
│   ├── context/            # context global (ex: user, joc)
│   ├── types/              # interfețe TypeScript
│   ├── App.tsx             # root component
│   └── main.tsx            # entry point
├── package.json
└── vite.config.ts



------



 PASUL 2: Structura inițială de pagini
Pentru început, facem 3 pagini:

LoginPage – login/register

LobbyPage – lista jocuri / start joc

GamePage – harta + quiz

Instalăm React Router pentru navigare:

bash
Copy
Edit
npm install react-router-dom
În main.tsx:

tsx
Copy
Edit
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
În App.tsx:

tsx
Copy
Edit
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import LobbyPage from './pages/LobbyPage'
import GamePage from './pages/GamePage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/lobby" element={<LobbyPage />} />
      <Route path="/game" element={<GamePage />} />
    </Routes>
  )
}

export default App



-----------------



import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const navigate = useNavigate()

  const handleLogin = () => {
    // de test, setăm în localStorage și mergem în lobby
    localStorage.setItem('user', username)
    navigate('/lobby')
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>ConQUIZtador</h2>
      <input
        type="text"
        placeholder="Alege username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Intră în joc</button>
    </div>
  )
}



------------------------


 PASUL 3: LoginPage simplu
În src/pages/LoginPage.tsx:

tsx
Copy
Edit
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const navigate = useNavigate()

  const handleLogin = () => {
    // de test, setăm în localStorage și mergem în lobby
    localStorage.setItem('user', username)
    navigate('/lobby')
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>ConQUIZtador</h2>
      <input
        type="text"
        placeholder="Alege username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Intră în joc</button>
    </div>
  )
}