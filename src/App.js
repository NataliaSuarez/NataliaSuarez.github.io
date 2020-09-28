import React from 'react';
import fire from './fire_white.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
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
      </div>
      <div className="App-body">
        <div className="header-elem-box">
          <div className="header-elem-box">
            <p className="title">
              <strong>&gt;</strong> experience
            </p>
            <p className="exp-item">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
            <p className="exp-item">
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
            </p>
            <p className="exp-item">
            "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
            </p>
          </div>
        </div>
        <div className="header-elem-box">
          <div className="header-elem-box">
            <p className="title">
              <strong>&gt;</strong> skills
            </p>
            <div className="header-elem-box">
              <div className="tech-description">
                FRONTEND <span className="tech-item">vue.js react</span>
              </div>
              <div className="tech-description">
                BACKEND
              </div>
              <div className="tech-description">
                DDBB
              </div>
              <div className="tech-description">
                INFRASTRUCTURE
              </div>
              <div className="tech-description">
                METHODOLOGIES
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
