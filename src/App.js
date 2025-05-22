import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Player from './pages/Player'
import NotFound from './pages/NotFound'
import BasePage from './pages/BasePage'
import Search from './pages/Search'
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/player/:id" element={<Player />} />
        <Route path="/base" element={<BasePage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/buscar" element={<Search />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
