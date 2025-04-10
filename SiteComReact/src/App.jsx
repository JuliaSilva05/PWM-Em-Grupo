import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import CriarPersonagem from './components/CriarPersonagem'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/criar-personagem" element={<CriarPersonagem />} />
            <Route path="/personagens" element={<div>Página de Personagens (em construção)</div>} />
            <Route path="/sobre" element={<div>Página Sobre (em construção)</div>} />
            <Route path="/login" element={<div>Página de Login (em construção)</div>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

function HomePage() {
  return (
    <div className="home-page-simple">
      <h1>Bem-vindo ao RPG Ficha Fácil</h1>
    </div>
  )
}

export default App
