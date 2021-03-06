import React, { useState } from "react";
import hamburger from '../Images/botao-de-menu-de-tres-linhas-horizontais.png';
import profilePic from '../Images/profile-pic.jpg';

import '../Styles/MobileHeader.css'

function MobileHeader() {
  const [hambClass, setHambClass] = useState('hide-nav');

  const visit = (e) => {
    e.preventDefault();
  }

  const menuShow = () => {
    if(hambClass === 'hide-nav') {
      setHambClass('show-nav')
    } else {
      setHambClass('hide-nav')
    }
  }

  return(
    <div>
      <header className="mobile-header">
        <h1>SLACA 2019</h1>
        <div>
          <img onClick={ () => menuShow() } className="hamburger" src={hamburger} alt="Hamburger Menu" />
          <img src={profilePic} alt="Profile Pic" className="profile-pic" />
        </div>
      </header>
      <div className={hambClass}>
        <p className="mobile-title">Anais do 13 Simpósio Latino Americano de Ciências de Alimentos</p>
        <nav className="mobile-nav">
          <a onClick={ (e) => visit(e) } className="mobile-nav-item" href="/">Apresentação</a>
          <a onClick={ (e) => visit(e) } className="mobile-nav-item" href="/">Comitês</a>
          <a onClick={ (e) => visit(e) } className="mobile-nav-item" href="/">Autores</a>
          <a onClick={ (e) => visit(e) } className="mobile-nav-item" href="/">Eixos temáticos</a>
          <a onClick={ (e) => visit(e) } className="mobile-nav-item clicked-item" href="/">Trabalhos</a>
          <a onClick={ (e) => visit(e) } className="mobile-nav-item" href="/">Contato</a>
        </nav>
      </div>
    </div>
  )
}

export default MobileHeader;