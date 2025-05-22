import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../components/Card'
import Banner from '../components/Banner'

function Home() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function fetchMovies() {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular`,
        {
          params: {
            api_key: process.env.REACT_APP_TMDB_KEY,
            language: 'pt-BR',
            page: 1
          }
        }
      )
      setMovies(res.data.results)
    }

    fetchMovies()
  }, [])

  return (
    <div>
      <Banner />
      <div className="container">
        <h2 style={{ margin: '20px 0' }}>Filmes populares</h2>
        <div className="flex">
          {movies.map(movie => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
