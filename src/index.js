import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import './styles/global.css'
import { GlobalProvider } from './context/GlobalContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

root.render(
  <GlobalProvider>
    <App />
  </GlobalProvider>
)
