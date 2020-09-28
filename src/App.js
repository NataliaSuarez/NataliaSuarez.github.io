import React from 'react';
import fire from './fire.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-elem-box">
          <img src={fire} className="App-logo header-elem-box" alt="logo" />
        </div>
        <div className="header-elem-box">
          <p className="title">
            nat | fullstack developer
            <br></br>
            <br></br>
          </p>

          <p className="description">
            I've been a backend developer programming in Django and Symfony and I've had fun learning Node and React this year.
            <br></br>
            <br></br>
            I think collective projects are a wonderful way to work in groups of people where we can share experiences and knowledge. That’s why I’m involved in a hacklab space. 
            <br></br>I'm also interested in free software and technical challenges.
          </p>
        </div>
        <div className="contact-list header-elem-box">
          <a
            className="App-link"
            href="mailto:suarez.nataliam@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            &gt; suarez.nataliam@gmail.com
          </a>
          <a
            className="App-link"
            href="https://www.linkedin.com/in/natalia-suarez-dev/"
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
      </header>
    </div>
  );
}

export default App;
