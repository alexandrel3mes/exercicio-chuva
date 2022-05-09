import React from "react";
import '../Styles/QuestionCard.css'

import whiteHeartIcon from '../Images/white-heart_1f90d.png'

function QuestionCard() {
  return (
    <div className="question-card">
      <p className="question-subject">Assunto da pergunta aparece aqui</p>
      <p className="question-author">Carlos Hendrique Santos</p>
      <p className="question-overview">Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...</p>

      <div className="lower-area">
        <p className="dots lower-item">
        . <br />
        . <br />
        . <br />
        </p>
        <img className="heart-btn lower-item" src={whiteHeartIcon} alt="Heart Icon" />
        <p className="lower-item like-and-answer">1 like</p>
        <p className="lower-item like-and-answer">1 resposta</p>
      </div>
    </div>
  )
}

export default QuestionCard;
