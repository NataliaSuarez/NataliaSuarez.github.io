import React from 'react';
import fire from './fire.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={fire} className="App-logo header-elem-box" alt="logo" />
        <div class="header-elem-box">
          <p class="title">
            nat42 | fullstack developer
            <br></br>
            <br></br>
          </p>

          <p class="description">
            I've been a backend developer programming in Django and Symfony and I've had fun learning Node and React this year.
            <br></br>
            <br></br>
            I think collective projects are a wonderful way to work in groups of people where we can share experiences and knowledge. That’s why I’m involved in a hacklab space. 
            <br></br>I'm also interested in free software and technical challenges.
            <br></br>
            <br></br>
          </p>
          
          <div class="contact-list">
            <a
              className="App-link"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              &gt; natalia@camba.coop
            </a>
            <a
              className="App-link"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              &gt; linkedin
            </a>
            <a
              className="App-link"
              href="https://github.com/NataliaSuarez"
              target="_blank"
              rel="noopener noreferrer"
            >
              &gt; github
            </a>
            <a
              className="App-link"
              href="https://twitter.com/natsuarez42"
              target="_blank"
              rel="noopener noreferrer"
            >
              &gt; twitter
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
