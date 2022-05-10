import React, { useState } from "react";
import '../Styles/DiscussionCard.css';

import handWithPlant from '../Images/handWithPlant.png';
import ideas from '../Images/ideas.png';
import qAndA from '../Images/qAndA.png';
import QuestionCard from "./QuestionCard";
// import question from '../Images/question.png'

function DiscussionCard() {
  const [createMode, setCreateMode] = useState(false);
  const [endMode, setEndMode] = useState(false)

  const endForm = () => {
    setCreateMode(false);
    setEndMode(true);
  }

  const setCreateAgain = () => {
    setCreateMode(true);
    setEndMode(false);
  }
  return (
    <div className="discussion">
      <p className="discussion-title">Discussões</p>

      <div className="discussion-body">
        { !createMode && !endMode && (
        <div className="discussion-header">
          <p className="header-share">Compartilhe suas ideias ou dúvidas com os autores!</p>

          <div>
            <img src={handWithPlant} alt="hand with plant" />
            <img src={qAndA} alt="q and a letters"/>
            <img src={ideas} alt="two people with light bulb beneath them"/>
          </div>

          <p className="header-text">Sabia que o maior estímulo no desenvolvimento científico e cultural é a curiosidade? Deixe seus questionamentos ou sugestões para o autor!</p>
          <button onClick={() => setCreateMode(true) } className="create-btn">+ criar tópico</button>
        </div>
        )
      }
        { createMode && (
          <div className="create-mode">
            <p className="form-header">Tem uma dúvida ou sugestão? Compartilhe seu feedback com os autores!</p>
            <form className="form">
              <label className="form-label" htmlFor="subject">Assunto <br />
                <input
                  className="text-input"
                  id="subject"
                  type="text"
                  placeholder="Defina um tópico sucinto para notificar os autores..."
                />
              </label> <br />
              <label className="form-label" htmlFor="content">Conteúdo <br />
                <textarea
                  className="area-input"
                  id="content"
                />
              </label>
            </form>
            <button onClick={ () => endForm() } className="form-btn">Enviar</button>
          </div>
        )
      }

      { endMode && (
        <div className="end-card">
          <p className="end-title">Seu tópico foi enviado com sucesso! :D</p>
          <p className="end-msg">Agradecemos por sua contribuição, uma notificação será enviada ao seu email assim que seu tópico for respondido!</p>
          <p className="end-link">Descubra outros trabalhos!</p>
          <button className="new-btn" onClick={ () => setCreateAgain() }>criar novo tópico</button>

          
          <div className="feedback-card">
            <p className="feedback-msg">Aguardando feedback dos autores</p>
            <p className="end-link">Editar tópico</p>
          </div>
        </div>
      )}

        <QuestionCard />
        <QuestionCard />
      </div>
    </div>
  )
}

export default DiscussionCard;
