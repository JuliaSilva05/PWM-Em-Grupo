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
            <Route path="/personagens" element={<PagPersonagens/>} />
            <Route path="/sobre" element={<Sobre/>} />
            <Route path="/login" element={<Login/>} />
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
      <p> O RPG Ficha Fácil é o melhor site para criar fichas para seus personagens de RPG! </p>
    </div>
  )
}

function PagPersonagens(){
  return (
    <div>
      <h2> Página de Personagens </h2>
      <p> Personagens já criados: </p>
    </div>
  )
}

function Sobre(){
  return (
    <div>
      <h4> Sobre </h4>
      <p> Uma maneira simples de criar fichas para personagens de RPG </p>
    </div>
  )
}

function Login(){
  return (
    <div>
      <h5> Login </h5>
      <form>
        <label>Usuário:</label>
        <input type="text"/>
        <label>Senha:</label>
        <input type="password"/>
      </form>
      
    </div>
  )
}

export default App
