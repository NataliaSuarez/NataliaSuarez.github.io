import React from 'react';
import { Carousel } from 'react-bootstrap';
import vue from './imgs/vue.webp';
import react from './imgs/react.png';
import html5 from './imgs/html-5.svg';
import bootstrap from './imgs/getbootstrap-ar21.svg';
import './App.css';

function Skills () {
  return (
    <div className="header-elem-box">
      <div className="header-elem-box">
        <p className="title">
          <strong>&gt;</strong> SKILLS
        </p>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 height-400 opacity"
              src="https://images.freeimages.com/images/large-previews/99c/laptop-computers-1236114.jpg"
              alt="FRONTEND"
            />
            <Carousel.Caption>
              <h2 className="tech-item">Frontend</h2>
              <p className="tech-description">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <img
                src={vue}
                className="w-fix-little"
              />
              <img
                src={react}
                className="w-fix-little"
              />
              <img
                src={html5}
                className="w-fix-little"
              />
              <img
                src={bootstrap}
                className="w-fix-little"
              />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 height-400 opacity"
              src="https://images.freeimages.com/images/large-previews/99c/laptop-computers-1236114.jpg"
              alt="Backend"
            />
            <Carousel.Caption>
              <h2 className="tech-item">Backend</h2>
              <p className="tech-description">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <img
                src={vue}
                className="w-fix-little"
              />
              <img
                src={react}
                className="w-fix-little"
              />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 height-400 opacity"
              src="https://images.freeimages.com/images/large-previews/99c/laptop-computers-1236114.jpg"
              alt="Databases"
            />
            <Carousel.Caption>
              <h2 className="tech-item">Databases</h2>
              <p className="tech-description">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <img
                src={vue}
                className="w-fix-little"
              />
              <img
                src={react}
                className="w-fix-little"
              />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 height-400 opacity"
              src="https://images.freeimages.com/images/large-previews/99c/laptop-computers-1236114.jpg"
              alt="Infrastructure"
            />
            <Carousel.Caption>
              <h2 className="tech-item">Infrastructure</h2>
              <p className="tech-description">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <img
                src={vue}
                className="w-fix-little"
              />
              <img
                src={react}
                className="w-fix-little"
              />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 height-400 opacity"
              src="https://images.freeimages.com/images/large-previews/99c/laptop-computers-1236114.jpg"
              alt="Methodologies"
            />
            <Carousel.Caption>
              <h2 className="tech-item">Methodologies</h2>
              <p className="tech-description">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  )
}

export default Skills