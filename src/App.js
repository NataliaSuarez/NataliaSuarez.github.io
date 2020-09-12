import React from 'react';
import fire from './fire.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={fire} className="App-logo" alt="logo" />
        <p>
          nat42.
        </p>
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
      </header>
    </div>
  );
}

export default App;
