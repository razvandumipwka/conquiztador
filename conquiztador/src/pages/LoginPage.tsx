import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './LoginPage.css'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const navigate = useNavigate()

  const handleLogin = () => {
    if (username.trim() !== '') {
      localStorage.setItem('user', username)
      navigate('/lobby')
    }
  }

  return (
    <div className="login-page">
      <div className="login-card animate__animated animate__fadeInDown">
        <h1 className="game-title">ConQUIZtador</h1>
        <p className="subtitle">Intră în arenă și cucerește lumea prin cunoștințe</p>
        <input
          type="text"
          className="form-control my-3"
          placeholder="Nume de războinic..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          className="btn btn-warning w-100"
          onClick={handleLogin}
        >
          Intră în joc
        </button>
      </div>
    </div>
  )
}
