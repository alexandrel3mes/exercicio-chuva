import React, { useState } from "react";

import '../Styles/Overview.css'

function Overview() {
  const [moreStyle, setMoreStyle] = useState('hidden');
  const [moreOrLess, setMoreOrLess] = useState('ver mais');

  const seeMore = () => {
    if(moreStyle === 'hidden') {
      setMoreStyle('show')
      setMoreOrLess('ver menos')
    } else {
      setMoreStyle('hidden')
      setMoreOrLess('ver mais')
    }
  }

  return(
    <div className="overview">
      <p>Resumo</p>

      <p className="overview-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae turpis auctor, mollis felis ut, commodo turpis. Phasellus felis mauris, egestas eget cursus et, iaculis quis lacus. Fusce auctor eros sed magna ultricies gravida. Etiam aliquam dictum nisl, vel aliquet enim accumsan sit amet. Donec finibus nisi tellus, ut viverra lorem vestibulum ut.  Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum.  Etiam aliquam dictum nisl, vel aliquet enim accumsan sit ametl accumsant...
      <span className={moreStyle}>erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.</span><span className="see-more" onClick={ () => seeMore() }>{moreOrLess}</span>
      </p>
    </div>
  )
}

export default Overview;
