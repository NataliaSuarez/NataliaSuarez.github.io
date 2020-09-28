import React from 'react';
import fire from './fire.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-elem-box header-contact-info">
          <img src={fire} className="App-logo header-elem-box" alt="logo" />
          <div className="contact-list header-elem-box">
            <a
              className="App-link contact-list-item"
              href="https://www.linkedin.com/in/natalia-suarez-dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              &gt; linkedin
            </a>
            <a
              className="App-link contact-list-item"
              href="https://github.com/NataliaSuarez"
              target="_blank"
              rel="noopener noreferrer"
            >
              &gt; github
            </a>
            <a
              className="App-link contact-list-item"
              href="https://twitter.com/natsuarez42"
              target="_blank"
              rel="noopener noreferrer"
            >
              &gt; twitter
            </a>
            <a
              className="App-link contact-list-item"
              href="mailto:suarez.nataliam@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              &gt; nat@dev
            </a>
          </div>
        </div>
        <div className="header-elem-box">
          <p className="title">
            nat | fullstack developer
          </p>

          <p className="description">
            I've been a backend developer programming in Django and Symfony and I've had fun learning Node and React this year.
          </p>
          <p className="description">
            I think collective projects are a wonderful way to work in groups of people where we can share experiences and knowledge.
          </p>
          <p className="description"> 
            I'm also interested in art, free software & technical challenges. That's why I'm playing with Hydra, GTP-2 and other art-tech tools. 
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
