import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

const ProductSummary = () => {
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(1);
  const [productName] = useState(faker.commerce.productName());
  const [productCreator] = useState(faker.internet.userName());
  const [productPrice] = useState(faker.commerce.price(20, 60, 2, 'CA$'));

  return (
    <div className="ProductSummary">
      <div className="name">{productName}</div>
      <div className="creator">
        {'Designed by '}
        <span className="username">
          {productCreator}
        </span>
      </div>
      <div className="price">
        {productPrice}
      </div>
      <div className="sizes">
        {['S', 'M', 'L', 'XL', '2XL'].map((size, i) => (
          <div
            className={`size clickable${selectedSizeIndex === i ? ' selected' : ''}`}
            key={size}
            onClick={() => setSelectedSizeIndex(i)}
          >
            {size}
          </div>
        ))}
      </div>
      <select className="printLocation">
        <option>Front</option>
        <option>Back</option>
      </select>
      <div className="addToCart clickable">Add to cart</div>
    </div>
  );
};

ReactDOM.render(<ProductSummary />, document.getElementById('summary'));
