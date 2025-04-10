import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import RomaniaMap from '../components/RomaniaMap'
import './GamePage.css'

export default function GamePage() {
  const navigate = useNavigate()
  const username = localStorage.getItem('user')

  useEffect(() => {
    if (!username) navigate('/')
  }, [navigate, username])

  const [controlled, setControlled] = useState<{ [key: string]: string }>({})

  const handleCountryClick = (id: string) => {
    setControlled(prev => ({
      ...prev,
      [id]: '#ffcc00', // simulare cucerire
    }))
  }

  return (
    <div className="game-page">
      <header className="game-header">
        <h1 className="game-title">ConQUIZtador</h1>
        <span className="player-name">👑 {username}</span>
      </header>

      <main className="game-main">
        <section className="game-map">
          <RomaniaMap onSelectCountry={handleCountryClick} controlled={controlled} />
        </section>

        <section className="game-ui">
          <div className="question-card">
            <p className="question-text">Ce țară are capitala la Varșovia?</p>
            <div className="answers">
              <button className="btn btn-outline-warning">Germania</button>
              <button className="btn btn-outline-warning">Polonia</button>
              <button className="btn btn-outline-warning">Ungaria</button>
              <button className="btn btn-outline-warning">Austria</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
