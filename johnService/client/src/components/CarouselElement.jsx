/* eslint-disable no-unused-vars */
import React from 'react';

const CarouselElement = (props) => (
    <li className="carousel-container" >
      <a href={`/product/${props.style.productId}`}>
        <img className="carousel-list-item" src={props.style.photo_url}></img>
      </a>
      <div className="style-name">{props.style.name}</div>
      <div className="style-price">${props.style.price}</div>
    </li>
);

export default CarouselElement;
