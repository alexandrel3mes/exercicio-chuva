import React, { useState } from "react";
import '../Styles/QuestionCard.css'

import whiteHeartIcon from '../Images/white-heart_1f90d.png'

function QuestionCard() {
  const [answers, setAnswers] = useState('answers hidden-answers')

  const showOrHide = () => {
    if(answers === 'answers hidden-answers') {
      setAnswers('answers show-answers')
    } else {
      setAnswers('answers hidden-answers')
    }
  }
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
        <p onClick={ () => showOrHide() } className="lower-item answer like-and-answer">2 respostas</p>
      </div>

      <div className={answers}>
        <div className="question-answer  author-or-coauthor">
          <div className="answer-headline">
            <p className="question-author">Adriano da Silva</p>
            <p className="author">Autor</p>
          </div>
          <p className="question-overview">Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...</p>
        </div>

        <div className="question-answer">
        <div className="answer-headline">
            <p className="question-author">Carlos Hendrique Santos</p>
          </div>
          <p className="question-overview">
            Consegui entender melhor agora! Parece que a variação da análise da dimensão e impacto de processo formativo situado impacto de processo formativo. <br />
            Obrigada pela resposta, muito interessante o seu trabalho! </p>
        </div>
      </div>
    </div>
  )
}

export default QuestionCard;
