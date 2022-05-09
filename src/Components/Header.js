import React from "react";
import '../Styles/Header.css'

import profilePic from '../Images/profile-pic.jpg'

function Header() {
  return (
    <header className="header">
          <div className="top-title">
            <p className="top-tecnic">
              Anais do Simpósio Latino Americano de Ciências de Alimentos
            </p>
            <h5 className="top-tecnic">
            Anais do 13 Simpósio Latino Americano de Ciências de Alimentos
            </h5>
            <p className="top-tecnic">
              ISSN: 1234-5678
            </p>
          </div>


          <div className="user-info-header">
            <select className="select-header">
              <option>
                🌐 PT, BR
              </option>
              <option>
                🌐 EN, US
              </option>
              <option>
                🌐 EN, UK
              </option>
            </select>

            <div className="message-with-email">
              <p className="message">Bem Vindo!</p>
              <p className="message">alguem12@galoascience.com</p>
            </div>

            <div className="profile">
              <img
                src={profilePic}
                alt="Profile Pic"
                className="profile-pic"
              />
            </div>            
          </div>
      </header>
  )
}

export default Header;
