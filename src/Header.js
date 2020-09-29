import React from 'react';
// import fire from './fire_white.svg';
import creatividad from './desing/creatividad.svg';
import './App.css';

function Header() {
  return (
    <div className="App-header">
      <div className="header-contact-info">
        <img src={creatividad} className="App-logo" alt="logo" />
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
          nat | fullstack developer
        </p>
        <p className="description">
          Resume project develop with React. 
        </p>
      </div>
    </div>
  );
}

export default Header;
