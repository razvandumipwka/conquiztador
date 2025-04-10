import './Map.css'

interface Props {
  onSelectCountry: (countyId: string) => void
  controlled: Record<string, string> // ex: { RO-AB: 'red', RO-B: 'blue' }
}

export default function RomaniaMap({ onSelectCountry, controlled }: Props) {
  return (
    <div className="map-container">
      <svg
        viewBox="0 0 1000 800"
        className="game-map-svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Exemplu de județe (folosește id-uri reale dacă ai SVG complet) */}
        <path
          id="RO-AB"
          d="M250,300 L300,300 L300,350 L250,350 Z"
          fill={controlled['RO-AB'] || '#444'}
          stroke="#aaa"
          onClick={() => onSelectCountry('RO-AB')}
        />
        <path
          id="RO-B"
          d="M310,300 L360,300 L360,350 L310,350 Z"
          fill={controlled['RO-B'] || '#444'}
          stroke="#aaa"
          onClick={() => onSelectCountry('RO-B')}
        />
        <path
          id="RO-CJ"
          d="M250,360 L300,360 L300,410 L250,410 Z"
          fill={controlled['RO-CJ'] || '#444'}
          stroke="#aaa"
          onClick={() => onSelectCountry('RO-CJ')}
        />
      </svg>
    </div>
  )
}
