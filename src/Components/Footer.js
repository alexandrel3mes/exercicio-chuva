import React from "react";
import galoaLogo from '../Images/galoalogo.png';
import '../Styles/Footer.css';

function Footer() {
  return(
    <footer className="footer">
      <div className="img-with-btn">
        <img className="galoaLogo" src={galoaLogo} alt="Galoá Logo" /> <br />
        <button className="footer-btn">
          Saiba mais
        </button>
      </div>

      <div className="footer-paragraph">
        <p>
          <strong>Preservar a memória do evento e ampliar o acesso ao conhecimento científico</strong> gerado em eventos é a razão  de ser da plataforma Galoá Proceedings.
        </p>
        <p>
          Os trabalhos publicados aqui têm maior alcance e ficam disponíveis para toda a comunidade científica, mantendo aceso o debate científico fomentado pelos encontros e aumentando o impacto do evento.
        </p>
      </div>
    </footer>
  )
}

export default Footer;
