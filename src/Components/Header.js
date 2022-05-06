import React from "react";

function Header() {
  return(
    <header className="app-header">
    <h1 className="slaca-title">SLACA 2019</h1>
    <img className="event-logo" alt="Logo Evento" />

    <nav className="app-nav">
      <a className="nav-item" href="/">Apresentação</a>
      <a className="nav-item" href="/">Comitês</a>
      <a className="nav-item" href="/">Autores</a>
      <a className="nav-item" href="/">Eixos temáticos</a>
      <a className="nav-item" href="/">Trabalhos</a>
      <a className="nav-item" href="/">Contato</a>
    </nav>
  </header>
  )
}

export default Header;
