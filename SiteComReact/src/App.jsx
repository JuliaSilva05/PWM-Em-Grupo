import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import './App.css'



function App() {
  return (
    <Router>
      
      <div className="app">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/criar-personagem" element={<div>Página de Criação de Personagem (em construção)</div>} />
            <Route path="/personagens" element={<div>Página de Personagens (em construção)</div>} />
            <Route path="/sobre" element={<div>Página Sobre (em construção)</div>} />
            <Route path="/login" element={<div>Página de Login (em construção)</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}



function HomePage() {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h2>Bem-vindo ao RPG Ficha Fácil</h2>
        <p>Crie e gerencie suas fichas de RPG de forma simples e rápida</p>
      </div>
      <div className="info-section">
        <h3>Como funciona?</h3>
        <p>Nosso site permite criar fichas simplificadas para seus personagens de D&D 5ª edição.</p>
        <p>Você pode escolher raça, classe, antecedente e preencher o background do seu personagem.</p>
      </div>
    </div>
  )
}

export default App
