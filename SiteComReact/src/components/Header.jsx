import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <h1>RPG Ficha Fácil</h1>
      <nav>
        <Link to="/">
          <img src="/src/assets/images/home-svgrepo-com.svg" alt="Ícone Home" />
          Início
        </Link>
        <Link to="/criar-personagem">
          <img src="/src/assets/images/person-svgrepo-com.svg" alt="Ícone Personagem" />
          Criar Personagem
        </Link>
        <Link to="/personagens">
          <img src="/src/assets/images/list-ul-alt-svgrepo-com.svg" alt="Ícone Lista" />
          Meus Personagens
        </Link>
        <Link to="/sobre">
          <img src="/src/assets/images/info-svgrepo-com.svg" alt="Ícone Informação" />
          Sobre
        </Link>
        <Link to="/login">
          <img src="/src/assets/images/user-alt-1-svgrepo-com.svg" alt="Ícone Usuário" />
          Login
        </Link>
      </nav>
    </header>
  )
}

export default Header 