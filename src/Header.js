import React from 'react';
import fire from './fire_white.svg';
import './App.css';

function Header() {
  return (
    <div className="App-header background-gray-3">
      <div className="header-contact-info">
        <img src={fire} className="App-logo" alt="logo" />
        <div className="contact-list">
          <a
          className="App-link contact-list-item"
          href="https://www.linkedin.com/in/natalia-suarez-dev/"
          target="_blank"
          rel="noopener noreferrer"
          >
          linkedin
          </a>
          <a
          className="App-link contact-list-item"
          href="https://github.com/NataliaSuarez"
          target="_blank"
          rel="noopener noreferrer"
          >
          github
          </a>
          <a
          className="App-link contact-list-item"
          href="https://twitter.com/natsuarez42"
          target="_blank"
          rel="noopener noreferrer"
          >
          twitter
          </a>
          <a
          className="App-link contact-list-item"
          href="mailto:suarez.nataliam@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          >
          nat@dev
          </a>
        </div>
      </div>
      <div className="header-elem-box">
        <p className="title-header">
          nat | developer & art-curious
        </p>
        <p className="description">
        Web about the projects in which I have participated, my interests and deep unknowledge. 
        </p>
      </div>
    </div>
  );
}

export default Header;
