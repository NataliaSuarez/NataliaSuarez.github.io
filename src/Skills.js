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
import posgrest from './imgs/posgresql.png';
import docker from './imgs/docker.svg';
import frontend from './desing/frontend.svg';
import backend from './desing/backend.svg';
import plataformas from './desing/plataformas-online.svg';
import desing from './desing/ui-ux-design.svg';
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
            <img
              src={plataformas}
              className="w-fix-big white"
              alt="backend"
            />
            <h2 className="tech-item color-green strong-text"><strong>&gt;</strong> backend</h2>
            <p className="tech-description color-white">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <div className="margin-small">
              <img
                src={django}
                className="w-fix-little filter-black-and-white"
                alt="Django"
              />
              <img
                src={nodejs}
                className="w-fix-little filter-black-and-white"
                alt="Node"
              />
              <img
                src={python}
                className="w-fix-little filter-black-and-white"
                alt="Python"
              />
              <img
                src={php}
                className="w-fix-little filter-black-and-white"
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
            <img
              src={desing}
              className="w-fix-big white"
              alt="frontend"
            />
            <h2 className="tech-item color-green strong-text"><strong>&gt;</strong> frontend</h2>
            <p className="tech-description color-white">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <div className="margin-small">
              <img
                src={vue}
                className="w-fix-little filter-black-and-white"
                alt="Vue"
              />
              <img
                src={react}
                className="w-fix-little filter-black-and-white"
                alt="React"
              />
              <img
                src={html5}
                className="w-fix-little filter-black-and-white"
                alt="Html"
              />
              <img
                src={bootstrap}
                className="w-fix-little filter-black-and-white"
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
            <img
              src={frontend}
              className="w-fix-big white"
              alt="backend"
            />
            <h2 className="tech-item color-green strong-text"><strong>&gt;</strong> databases</h2>
            <p className="tech-description color-white">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <div className="margin-small">
              <img
                src={mysql}
                className="w-fix-little filter-black-and-white"
                alt="Mysql"
              />
              <img
                src={mongo}
                className="w-fix-little filter-black-and-white"
                alt="Mongo"
              />
              <img
                src={posgrest}
                className="w-fix-little filter-black-and-white"
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
            <img
              src={backend}
              className="w-fix-big white"
              alt="backend"
            />
            <h2 className="tech-item color-green strong-text"><strong>&gt;</strong> infrastructure</h2>
            <p className="tech-description color-white">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <img
              src={docker}
              className="w-fix-little filter-black-and-white"
              alt="Docker"
            />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Skills