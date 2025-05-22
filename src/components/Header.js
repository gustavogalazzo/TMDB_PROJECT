import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div
        className="container"
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <h2>TMDB Filmes</h2>
        <nav style={{ display: 'flex', gap: '10px' }}>
          <Link to="/">Home</Link>
          <Link to="/base">Base</Link>
          <Link to="/buscar">Buscar</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
