import { Link } from 'react-router-dom'

function Card({ movie }) {
  return (
    <div
      style={{
        backgroundColor: '#1e1e1e',
        borderRadius: '8px',
        width: '150px',
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
      }}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        style={{ width: '100%' }}
      />
      <div style={{ padding: '10px' }}>
        <h4 style={{ fontSize: '14px', marginBottom: '8px' }}>{movie.title}</h4>
        <Link to={`/player/${movie.id}`}>Assistir</Link>
      </div>
    </div>
  )
}

export default Card
