// src/pages/Player.js
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Player() {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [trailer, setTrailer] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}`,
          {
            params: {
              api_key: process.env.REACT_APP_TMDB_KEY,
              language: 'pt-BR'
            }
          }
        )
        setMovie(res.data)
      } catch (error) {
        console.error('Erro ao buscar detalhes do filme:', error)
      }
    }

    async function fetchTrailer() {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/videos`,
          {
            params: {
              api_key: process.env.REACT_APP_TMDB_KEY,
              language: 'pt-BR'
            }
          }
        )

        // Procura por um trailer do YouTube
        const youtubeTrailer = res.data.results.find(
          video => video.type === 'Trailer' && video.site === 'YouTube'
        )

        setTrailer(youtubeTrailer)
      } catch (error) {
        console.error('Erro ao buscar trailer:', error)
      }
    }

    fetchMovieDetails()
    fetchTrailer()
  }, [id])

  if (!movie)
    return <p style={{ padding: '20px' }}>Carregando detalhes do filme...</p>

  return (
    <div className="container" style={{ padding: '20px' }}>
      <button
        onClick={() => navigate(-1)}
        style={{
          padding: '10px 20px',
          marginBottom: '20px',
          backgroundColor: '#ccc',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        ← Voltar
      </button>

      <h2>{movie.title}</h2>
      <div
        style={{
          display: 'flex',
          gap: '20px',
          marginTop: '20px',
          flexWrap: 'wrap'
        }}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          style={{ width: '300px', borderRadius: '8px' }}
        />
        <div style={{ maxWidth: '600px' }}>
          <p>
            <strong>Data de Lançamento:</strong> {movie.release_date}
          </p>
          <p>
            <strong>Duração:</strong> {movie.runtime} min
          </p>
          <p>
            <strong>Gêneros:</strong> {movie.genres.map(g => g.name).join(', ')}
          </p>
          <p>
            <strong>Nota:</strong> {movie.vote_average} / 10
          </p>
          <p style={{ marginTop: '15px' }}>{movie.overview}</p>
        </div>
      </div>

      {trailer ? (
        <div style={{ marginTop: '40px' }}>
          <h3>Trailer Oficial</h3>
          <iframe
            width="100%"
            height="400"
            src={`https://www.youtube.com/embed/${trailer.key}`}
            title="Trailer do Filme"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: '10px', marginTop: '15px' }}
          ></iframe>
        </div>
      ) : (
        <p style={{ marginTop: '40px' }}>Trailer não disponível.</p>
      )}
    </div>
  )
}

export default Player
