import React from 'react';
import {FiArrowRight} from 'react-icons/fi'
import {Link} from 'react-router-dom';

import '../styles/global.css';
import '../styles/pages/landing.css';
import logoImg from '../assets/images/logo.svg';

function landing (){
    return (
<div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Happiy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Duque de Caxias</strong>
          <span>Rio de Janeiro</span>
        </div>

        <Link to="/app" className="enter-app">
          <FiArrowRight size={26}  color="rgba(0, 0, 0, 0.6)" />
        </Link>

      </div>
    </div>
    );
}

export default landing;