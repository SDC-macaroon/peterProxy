import React, { useState, useEffect } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('api/productPreview/all')
      .then(result => result.json())
      .then(allProducts => setProducts(allProducts));
  }, []);

  return (
    <div className="ProductList">
      {products.map(({ productId, productName }) => (
        <div className="productLink" key={productId}>
          <a href={`product/${productName.toLowerCase().replace(/ /g, '-')}/${productId}`}>
            {productName}
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
