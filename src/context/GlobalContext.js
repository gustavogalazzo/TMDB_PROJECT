import { createContext, useState } from 'react'

export const GlobalContext = createContext()

export function GlobalProvider({ children }) {
  const [favoritos, setFavoritos] = useState([])

  const adicionarFavorito = filme => {
    setFavoritos(prev => [...prev, filme])
  }

  return (
    <GlobalContext.Provider value={{ favoritos, adicionarFavorito }}>
      {children}
    </GlobalContext.Provider>
  )
}
