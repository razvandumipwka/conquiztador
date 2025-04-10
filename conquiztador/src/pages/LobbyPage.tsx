import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import './LobbyPage.css'

export default function LobbyPage() {
  const navigate = useNavigate()
  const username = localStorage.getItem('user')

  useEffect(() => {
    if (!username) navigate('/')
  }, [navigate, username])

  const handleStartGame = () => {
    navigate('/game')
  }

  return (
    <div className="lobby-page">
      <div className="lobby-card animate__animated animate__fadeIn">
        <h2 className="game-title">Sala de așteptare</h2>
        <p className="subtitle">Bine ai venit, <strong>{username}</strong>!</p>
        <div className="players-list">
          <p><em>(Simulare)</em> Jucători conectați:</p>
          <ul>
            <li>SirQuizalot</li>
            <li>LadyLexicon</li>
            <li>{username}</li>
          </ul>
        </div>
        <button className="btn btn-success w-100 mt-4" onClick={handleStartGame}>
          Începe cucerirea!
        </button>
      </div>
    </div>
  )
}
