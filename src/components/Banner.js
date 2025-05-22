import { useEffect, useState } from 'react'
import axios from 'axios'

function Banner() {
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    async function fetchBannerMovie() {
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
      setMovie(res.data.results[0])
    }

    fetchBannerMovie()
  }, [])

  if (!movie)
    return <p style={{ textAlign: 'center', margin: '30px' }}>Carregando...</p>

  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px',
        display: 'flex',
        alignItems: 'flex-end',
        padding: '20px',
        color: 'white'
      }}
    >
      <h1
        style={{
          fontSize: '32px',
          fontWeight: 'bold',
          textShadow: '2px 2px 8px #000'
        }}
      >
        {movie.title}
      </h1>
    </div>
  )
}

export default Banner
