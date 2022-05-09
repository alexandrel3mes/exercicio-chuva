import React from "react";
import slacaLogo from "../Images/slaca-logo.png";
import '../Styles/SideMenu.css';

function SideMenu() {
  const visit = (e) => {
    e.preventDefault();
  }

  return(
    <aside className="side-menu">
      <h2 className="slaca-title">SLACA 2019</h2>
      <img src={slacaLogo} className="event-logo" alt="Logo Evento" />

      <nav className="app-nav">
        <a onClick={ (e) => visit(e) } className="nav-item" href="/">Apresentação</a>
        <a onClick={ (e) => visit(e) } className="nav-item" href="/">Comitês</a>
        <a onClick={ (e) => visit(e) } className="nav-item" href="/">Autores</a>
        <a onClick={ (e) => visit(e) } className="nav-item" href="/">Eixos temáticos</a>
        <a onClick={ (e) => visit(e) } className="nav-item clicked" href="/">Trabalhos</a>
        <a onClick={ (e) => visit(e) } className="nav-item" href="/">Contato</a>
      </nav>
    </aside>
  )
}

export default SideMenu;
