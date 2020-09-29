import React from 'react';
import { Carousel } from 'react-bootstrap';
import keyboard from './imgs/keyboard.jpg';
import code from './imgs/code.jpg';
import vue from './imgs/vue.webp';
import react from './imgs/react.png';
import html5 from './imgs/html-5.svg';
import bootstrap from './imgs/bootstrap.svg';
import django from './imgs/django.svg';
import python from './imgs/python.svg';
import nodejs from './imgs/nodejs.svg';
import php from './imgs/php.svg';
import mongo from './imgs/mongo.svg';
import mysql from './imgs/mysql.png';
import posgrest from './imgs/posgresql.svg';
import docker from './imgs/docker.svg';
import './App.css';

function Skills () {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 height-400 black-white-filter"
            src={keyboard}
            alt="Backend"
          />
          <Carousel.Caption>
            <h2 className="tech-item color-green strong-text"><strong>&gt;</strong> backend</h2>
            <p className="tech-description color-white">Symfony, Django, Feathers.js | Javascript, Python, PHP, Java</p>
            <div className="margin-small">
              <img
                src={django}
                className="w-fix-little"
                alt="Django"
              />
              <img
                src={nodejs}
                className="w-fix-little"
                alt="Node"
              />
              <img
                src={python}
                className="w-fix-little"
                alt="Python"
              />
              <img
                src={php}
                className="w-fix-little"
                alt="Php"
              />
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <section
            className="w-100 height-400 background-gray-2"
            alt="Frontend"
          />
          <Carousel.Caption>
            <h2 className="tech-item color-green strong-text"><strong>&gt;</strong> frontend</h2>
            <p className="tech-description color-white">Vue, React, Vue Native Script | Flux</p>
            <div className="margin-small">
              <img
                src={vue}
                className="w-fix-little"
                alt="Vue"
              />
              <img
                src={react}
                className="w-fix-little"
                alt="React"
              />
              <img
                src={html5}
                className="w-fix-little"
                alt="Html"
              />
              <img
                src={bootstrap}
                className="w-fix-little"
                alt="Bootstrap"
              />
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 height-400 black-white-filter"
            src={code}
            alt="Databases"
          />
          <Carousel.Caption>
            <h2 className="tech-item color-green strong-text"><strong>&gt;</strong> databases</h2>
            <p className="tech-description color-white">Mysql, MongoDB, PosgresSQL</p>
            <div className="margin-small">
              <img
                src={mysql}
                className="w-fix-little"
                alt="Mysql"
              />
              <img
                src={mongo}
                className="w-fix-little"
                alt="Mongo"
              />
              <img
                src={posgrest}
                className="w-fix-little"
                alt="Posgresql"
              />
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <section
            className="w-100 height-400 background-gray-2"
            alt="Infrastructure"
          />
          <Carousel.Caption>
            <h2 className="tech-item color-green strong-text"><strong>&gt;</strong> infrastructure</h2>
            <p className="tech-description color-white">Docker, docker-compose, bash, git</p>
            <img
              src={docker}
              className="w-fix-little"
              alt="Docker"
            />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Skills