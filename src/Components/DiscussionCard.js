import React from "react";
import '../Styles/DiscussionCard.css';

import handWithPlant from '../Images/handWithPlant.png';
import ideas from '../Images/ideas.png';
import qAndA from '../Images/qAndA.png';
import QuestionCard from "./QuestionCard";

function DiscussionCard() {
  return (
    <div className="discussion">
      <p className="discussion-title">Discussões</p>

      <div className="discussion-body">
        <div className="discussion-header">
          <p className="header-share">Compartilhe suas ideias ou dúvidas com os autores!</p>

          <div>
            <img src={handWithPlant} alt="hand with plant" />
            <img src={qAndA} alt="q and a letters"/>
            <img src={ideas} alt="two people with light bulb beneath them"/>
          </div>

          <p className="header-text">Sabia que o maior estímulo no desenvolvimento científico e cultural é a curiosidade? Deixe seus questionamentos ou sugestões para o autor!</p>
          <button className="create-btn">+ criar tópico</button>
        </div>

        <QuestionCard />
        <QuestionCard />
      </div>
    </div>
  )
}

export default DiscussionCard;
