import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import CriarPersonagem from './components/CriarPersonagem'
import MostrarPersonagens from './components/MostrarPersonagens'
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
            <Route path="/personagens" element={<MostrarPersonagens/>} />
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
    <div class="home-page">
      <h1 class = "center">Bem-vindo ao RPG Ficha Fácil</h1>
      <p> O RPG Ficha Fácil é o melhor site para criar fichas para seus personagens de RPG! </p>

      <div class="flex-home">
      <div>
          <h1>Crie</h1>
          <p>Use a página de criação integrada com a API D&D 5e para facilmente criar o personagem da sua imaginação.</p>
        </div>
        <div>
          <h1>Organize</h1>
          <p>Use a página dos seus personagens para agrupar todo mundo que você precisa para sua próxima jornada.</p>
        </div>
      </div>
    </div>
  )
}


function Sobre(){
  return (
    <div class="sobre">
      <h1>Sobre</h1>
      <p> 
        Projeto para a cadeira 'Programação Web E Mobile' 2025.1{"\n"}
      </p>
      <p>
        Professor : Márcio Augusto Silva Bueno{"\n"}{"\n"}
      </p>
      <h1>Feito por:</h1>
      <h3>Rafael Sampaio e Silva</h3>
      <h3>Gabriel Martins de Souza</h3>
      <h3>Júlia Silva Souto</h3>
      <h3>Matheus Veríssimo Rodrigues Pinheiro</h3>
      <h3>Graziela de Oliveira Gonçalves</h3>
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
        <br/>
        <label>Senha:</label>
        <input type="password"/>
        <br/>
        <button type="submit">Entrar</button>
      </form>
      
    </div>
  )
}

export default App
