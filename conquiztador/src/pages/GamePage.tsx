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
