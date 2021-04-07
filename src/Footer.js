import React from "react";
import hands from "./desing/hands-heart.svg";
import "./App.css";

function Footer() {
  return (
    <section className="background-gray-3" alt="Frontend">
      <div className="padding-large column align-items-center">
        <img
          src={hands}
          className="height-30 align-center margin-b-small"
          alt="logo"
        />
        <a
          className="color-white fz-1 strong-text link-item align-init"
          href="https://www.linkedin.com/in/natalia-suarez-dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          + linkedin
        </a>
        <a
          className="color-white fz-1 strong-text link-item align-init"
          href="https://github.com/NataliaSuarez"
          target="_blank"
          rel="noopener noreferrer"
        >
          + github
        </a>
        <a
          className="color-white fz-1 strong-text link-item align-init"
          href="https://twitter.com/natsuarez42"
          target="_blank"
          rel="noopener noreferrer"
        >
          + twitter
        </a>
        <a
          className="color-white fz-1 strong-text link-item align-init"
          href="mailto:contact@natdeveloper.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          + nat@dev
        </a>
        <p className="color-white light-300-text fz-4 italic padding-small">
          &gt; share with me new funny projects, tech challenges & new
          knowledges :)
        </p>
      </div>
    </section>
  );
}

export default Footer;
