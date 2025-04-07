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



export default App
