import { Link } from 'react-router-dom'
import '../styles/Header.css'
import homeIcon from '../assets/images/home-svgrepo-com.svg'
import personIcon from '../assets/images/person-svgrepo-com.svg'
import infoIcon from '../assets/images/info-svgrepo-com.svg'
import userIcon from '../assets/images/user-alt-1-svgrepo-com.svg'

function Header() {
  return (
    <header className="header">

      <h1>RPG Ficha Fácil</h1>

      <nav>
        <Link to="/">
          <img src={homeIcon} alt="Ícone Home" />
          Início
        </Link>
        <Link to="/criar-personagem">
          <img src={personIcon} alt="Ícone Personagem" />
          Criar Personagem
        </Link>
        <Link to="/sobre">
          <img src={infoIcon} alt="Ícone Informação" />
          Sobre
        </Link>
        <Link to="/login">
          <img src={userIcon} alt="Ícone Usuário" />
          Login
        </Link>

      </nav>

    </header>
  )
}

export default Header