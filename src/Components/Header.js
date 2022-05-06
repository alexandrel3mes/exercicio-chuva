import React from "react";
import slacaLogo from "../Images/slaca-logo.png"

function Header() {
  const visit = (e) => {
    e.preventDefault();
  }

  return(
    <header className="app-header">
    <h1 className="slaca-title">SLACA 2019</h1>
    <img src={slacaLogo} className="event-logo" alt="Logo Evento" />

    <nav className="app-nav">
      <a onClick={ (e) => visit(e) } className="nav-item" href="/">Apresentação</a>
      <a onClick={ (e) => visit(e) } className="nav-item" href="/">Comitês</a>
      <a onClick={ (e) => visit(e) } className="nav-item" href="/">Autores</a>
      <a onClick={ (e) => visit(e) } className="nav-item" href="/">Eixos temáticos</a>
      <a onClick={ (e) => visit(e) } className="nav-item" href="/">Trabalhos</a>
      <a onClick={ (e) => visit(e) } className="nav-item" href="/">Contato</a>
    </nav>
  </header>
  )
}

export default Header;
