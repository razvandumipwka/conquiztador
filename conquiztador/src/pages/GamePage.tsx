import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import RomaniaMap from '../components/RomaniaMap'
import './GamePage.css'
import { QUESTIONS, Question } from '../data/questions'

interface Player {
  id: number
  name: string
  color: string
  score: number
}

const initialPlayers: Player[] = [
  { id: 1, name: 'Jucător 1', color: '#ffcc00', score: 0 },
  { id: 2, name: 'Jucător 2', color: '#66ccff', score: 0 },
  { id: 3, name: 'Jucător 3', color: '#ff6666', score: 0 }
]

export default function GamePage() {
  const navigate = useNavigate()
  const username = localStorage.getItem('user')

  useEffect(() => {
    if (!username) navigate('/')
  }, [navigate, username])

  const [players, setPlayers] = useState<Player[]>(initialPlayers)
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState<number>(0)
  const [controlled, setControlled] = useState<{ [key: string]: string }>({})
  const [activeQuestion, setActiveQuestion] = useState<Question | null>(null)
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)

  const handleCountryClick = (id: string) => {
    if (activeQuestion) return // nu permite click-uri multiple simultan
    const q = QUESTIONS[id]
    if (q) {
      setSelectedRegion(id)
      setActiveQuestion(q)
    }
  }

  const handleAnswer = (answer: string) => {
    if (!activeQuestion || !selectedRegion) return
    const isCorrect = answer === activeQuestion.correct
    const currentPlayer = players[currentPlayerIndex]

    if (isCorrect) {
      setControlled(prev => ({
        ...prev,
        [selectedRegion]: currentPlayer.color
      }))

      setPlayers(prev =>
        prev.map(p =>
          p.id === currentPlayer.id ? { ...p, score: p.score + 1 } : p
        )
      )
    }

    setTimeout(() => {
      setActiveQuestion(null)
      setSelectedRegion(null)
      setCurrentPlayerIndex(prev => (prev + 1) % players.length)
    }, 1000)
  }

  return (
    <div className="game-page">
      <header className="game-header">
        <h1 className="game-title">ConQUIZtador</h1>
        <div className="scoreboard">
          {players.map((p, i) => (
            <div
              key={p.id}
              className={`score-item ${
                i === currentPlayerIndex ? 'active' : ''
              }`}
            >
              <span style={{ color: p.color }}>●</span> {p.name}: {p.score} pct
            </div>
          ))}
        </div>
      </header>

      <main className="game-main">
        <section className="game-map">
          <RomaniaMap onSelectCountry={handleCountryClick} controlled={controlled} />
        </section>

        <section className="game-ui">
          {activeQuestion ? (
            <div className="question-card">
              <p className="question-text">{activeQuestion.question}</p>
              <div className="answers">
                {activeQuestion.answers.map((ans) => (
                  <button
                    key={ans}
                    className="btn btn-outline-warning"
                    onClick={() => handleAnswer(ans)}
                  >
                    {ans}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <p className="turn-info">
              Este rândul lui <strong>{players[currentPlayerIndex].name}</strong>! Alege un județ.
            </p>
          )}
        </section>
      </main>
    </div>
  )
}
