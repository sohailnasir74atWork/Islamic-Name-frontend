// ShapeAnimation.js

import React, { useEffect } from 'react';
import './ShapeAnimation.scss';

const ShapeAnimation = () => {
  useEffect(() => {
    const allShapes = document.querySelectorAll('[class*="shape-container--"]');
    allShapes.forEach((shape) => {
      const rotation = Math.floor(Math.random() * 360);
      const speed = 40 + Math.floor(Math.random() * 30);
      const colors = ['#45ffdc', '#ffef96', '#ff94a1', '#cda1ff', '#31b4ff', '#4800c0', '#9300c9'];
      const colorKey = Math.floor(Math.random() * colors.length);
      const shapeColors = colors[colorKey];
      const shapes = ['\f111', '\f10c', '\f068', '\f22d', '\f077', '\f04b', '\f067', '\f04d'];
      const shapeKey = Math.floor(Math.random() * shapes.length);
      const shapeType = shapes[shapeKey];
      const shapeSize = 0.7 + Math.random() * 10;

      const shapeAnimation = `shape-${shape.getAttribute('data-shape-index')}`;
      const shapeAnimationKeyframes = `@keyframes ${shapeAnimation} {
        0% {
          transform: translate3d(0,0,0) rotate(${rotation + 0}deg);
        }
        100% {
          transform: translate3d(0,0,0) rotate(${rotation + 360}deg);
        }
      }`;

      const style = document.createElement('style');
      style.type = 'text/css';
      style.appendChild(document.createTextNode(shapeAnimationKeyframes));
      document.head.appendChild(style);

      shape.classList.add('shape-animation');
      shape.classList.add(shapeAnimation);

      const shapeAfter = document.createElement('div');
      shapeAfter.classList.add('random-shape');
      shapeAfter.style.margin = `${shapeSize}rem`;
      shapeAfter.style.color = shapeColors;
      shapeAfter.style.fontSize = `${shapeSize * 0.2}rem`;
      shapeAfter.textContent = shapeType;

      shape.appendChild(shapeAfter);
      document.addEventListener("DOMContentLoaded", function() {
        var shapeContainer = document.querySelector(".shape");
      
        for (var i = 1; i <= 50; i++) {
          var shapeContainerEl = document.createElement("div");
          shapeContainerEl.classList.add("shape-container--" + i, "shape-animation");
      
          var randomShapeEl = document.createElement("div");
          randomShapeEl.classList.add("random-shape");
          shapeContainerEl.appendChild(randomShapeEl);
      
          shapeContainer.appendChild(shapeContainerEl);
        }
      });
        });
  }, []);

  const shapeCount = 80;

  const renderShapes = () => {
    const shapes = [];

    for (let i = 1; i <= shapeCount; i++) {
      shapes.push(
        <div className={`shape-container--${i}`} data-shape-index={i} key={i}>
          <div className="random-shape" />
        </div>
      );
    }

    return shapes;
  };

  return (
    <div className="container-shape">
      <div className="inner-container">
        <div className="shape">
          {renderShapes()}
          
        </div>
        <div>
        <h3>dsvcdcvddssssssssssssssssssssfdfdf</h3></div>
      </div>
    </div>
  );
};

export default ShapeAnimation;
