// src/pages/Search.js
import { useState } from 'react'
import axios from 'axios'
import Card from '../components/Card'

function Search() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  const searchMovies = async e => {
    e.preventDefault()
    if (!query.trim()) return

    try {
      const res = await axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
          language: 'pt-BR',
          query: query
        }
      })
      setResults(res.data.results)
    } catch (error) {
      console.error('Erro na busca:', error)
    }
  }

  return (
    <div className="container">
      <h2 style={{ margin: '20px 0' }}>Buscar Filmes</h2>
      <form onSubmit={searchMovies} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={query}
          placeholder="Digite o nome do filme..."
          onChange={e => setQuery(e.target.value)}
          style={{
            padding: '10px',
            fontSize: '16px',
            width: '300px',
            marginRight: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc'
          }}
        />
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#61dafb',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Buscar
        </button>
      </form>

      <div className="flex">
        {results.map(movie => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default Search
