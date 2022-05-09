import React from "react";
import '../Styles/DetailCard.css';

function DetailCard() {
  return(
    <div className="detail-card">
      <p className="detail-title">Detalhes</p>

      <div className="detail-description">
        <p className="detail-p tags">Tipo de Apresentação: <strong>Pôster</strong></p>
        <p className="detail-p tags">Eixo temático: <strong>Alimentação e saúde A5</strong></p>
        <p className="detail-p tags">Palavras-chaves: <strong>Alimentos funcionais, alimentação escolar.</strong></p>

        <p className="detail-p quote">
          <strong>Autores:</strong> <br />
          Galileo Galilei¹ <br />
          Berta Lange de Morretes² <br />
          Isaac Newton³ <br />
          Cesar Lattes¹ <br />
          Stephen Hawking⁴ <br />
        </p>
        
        <p className="detail-p quote-detail">
          ¹Universidade Estadual de Campinas <br />
          ²Universidade de São Paulo <br />
          ³Instituto Nacional de Pesquisas Espaciais <br />
          ⁴Universidade Federal do Rio de Janeiro <br />
        </p>
      </div>
    </div>
  )
}

export default DetailCard;

