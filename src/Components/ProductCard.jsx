import React from 'react';
import './ProductCard.css';

const ProductCard = ({product}) => {
  return (
    <div className="product-card">
        <img src={product.image} alt={product.name} className="product-image"/>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <h3>{product.price}</h3>
    </div>
  );
}

export default ProductCard;
