import React from 'react';
import hands from './desing/hands-heart.svg';
import './App.css'

function Footer() {
  return (
    <section
    className="background-gray-3"
    alt="Frontend"
  >
    <div className="padding-large column">
      <img src={hands} className="height-50 align-center margin-b-small" alt="logo" />
      <a
        className="color-white strong-text link-item align-init"
        href="https://www.linkedin.com/in/natalia-suarez-dev/"
        target="_blank"
        rel="noopener noreferrer"
      >
        + linkedin
      </a>
      <a
        className="color-white strong-text link-item align-init"
        href="https://github.com/NataliaSuarez"
        target="_blank"
        rel="noopener noreferrer"
      >
        + github
      </a>
      <a
        className="color-white strong-text link-item align-init"
        href="https://twitter.com/natsuarez42"
        target="_blank"
        rel="noopener noreferrer"
      >
        + twitter
      </a>
      <a
        className="color-white strong-text link-item align-init"
        href="mailto:suarez.nataliam@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        + nat@dev
      </a>
      <p className="color-white">&gt; share with me new funny projects, tech challenges & new knowledges :)</p>
    </div>
  </section>
  );
}

export default Footer;