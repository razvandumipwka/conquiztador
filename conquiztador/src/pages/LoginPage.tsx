import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './LoginPage.css'
import DragonIntro from '../pages/DragonIntro'


export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login')
  const [showDragon, setShowDragon] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    // Dragon intro se termină după 4 secunde
    const timer = setTimeout(() => setShowDragon(false), 4000)
    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = () => {
    if (username.trim() !== '') {
      localStorage.setItem('user', username)
      navigate('/lobby')
    }
  }

  return (
    <div className="login-page">
      {showDragon ? (
        <DragonIntro onFinish={() => setShowDragon(false)} />
      ) : (
        <div className="login-card animate__animated animate__fadeInDown">
          <h1 className="game-title">ConQUIZtador</h1>
          <p className="subtitle">Intră în arenă și cucerește lumea prin cunoștințe</p>

          <div className="tabs">
            <button
              className={activeTab === 'login' ? 'active' : ''}
              onClick={() => setActiveTab('login')}
            >
              Login
            </button>
            <button
              className={activeTab === 'register' ? 'active' : ''}
              onClick={() => setActiveTab('register')}
            >
              Înregistrare
            </button>
          </div>

          <input
            type="text"
            placeholder="Nume de războinic..."
            className="form-control my-2"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Parola..."
            className="form-control my-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="btn btn-warning w-100 my-2" onClick={handleSubmit}>
            {activeTab === 'login' ? 'Intră în joc' : 'Înregistrează-te'}
          </button>

          {activeTab === 'login' && (
            <p className="forgot-password" onClick={() => alert('Funcționalitate în curs de dezvoltare')}>
              Ai uitat parola?
            </p>
          )}
        </div>
      )}
    </div>
  )
}
