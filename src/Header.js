import React from 'react';
import fire from './fire_white.svg';
import './App.css';

function Header() {
  return (
    <div className="background-gray-3 column justify-start color-white padding-v-small fz-1">
      <div className="row-custom justify-s-around">
        <img src={fire} className="height-50 align-center margin-b-small" alt="logo" />
        <div className="column justify-s-around padding-vmin-v-small">
          <a
            className="color-white fz-1 strong-text link-item align-f-end"
            href="https://www.linkedin.com/in/natalia-suarez-dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
          </a>
          <a
            className="color-white fz-1 strong-text link-item align-f-end"
            href="https://github.com/NataliaSuarez"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
          <a
            className="color-white fz-1 strong-text link-item align-f-end"
            href="https://twitter.com/natsuarez42"
            target="_blank"
            rel="noopener noreferrer"
          >
            twitter
          </a>
          <a
            className="color-white fz-1 strong-text link-item align-f-end"
            href="mailto:suarez.nataliam@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            nat@dev
          </a>
        </div>
      </div>
      <div className="padding-vmin-v-small justify-s-between">
        <p className="without-margin strong-1-text padding-b-small color-white fz-1 t-align-center">
          nat | developer & art-curious
        </p>
        <p className="without-margin light-300-text fz-4 italic t-align-center padding-small">
        Web about the projects in which I have participated, my interests and deep unknowledge. 
        </p>
      </div>
    </div>
  );
}

export default Header;
