import React from 'react';
import ReactDOM from 'react-dom';
import ColourPreview from '../philipService/client/productPage/components/ColourPreview';
import '../johnService/client/src/index';
import '../javService/client/src/index';
import './components/Header';
import './components/header.css';
import './components/productSummary';
import './components/productSummary.css';
import './styles.css';

const [,, productId] = window.location.pathname.split('/');

ReactDOM.render(<ColourPreview productId={productId} />, document.getElementById('philipApp'));
// No ReactDOM.render() call required for John's component
// No ReactDOM.render() call required for Jav's component

const scaleCarousel = () => {
  const carousel = document.getElementsByClassName('carousel')[0];
  const scale = document.getElementsByClassName('product')[0].clientWidth / carousel.clientWidth;

  carousel.style.transform = `scale(${scale})`;
  carousel.style.transformOrigin = 'top left';

  document.getElementsByClassName('outerBox')[0].style.height = `${458 * scale}px`;
};

scaleCarousel();
window.onresize = scaleCarousel;
