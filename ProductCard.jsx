import React from 'react';
import './ProductCard.css';

const ProductCard = ({ plant, onAddToCart, isInCart }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={plant.image} 
          alt={plant.name} 
          className="product-image"
          loading="lazy"
        />
        <span className="product-category">{plant.category}</span>
      </div>
      <div className="product-info">
        <h3 className="product-name">{plant.name}</h3>
        <p className="product-description">{plant.description}</p>
        <div className="product-footer">
          <span className="product-price">${plant.price.toFixed(2)}</span>
          <button 
            className={`add-to-cart-btn ${isInCart ? 'in-cart' : ''}`}
            onClick={() => onAddToCart(plant)}
            disabled={isInCart}
          >
            {isInCart ? 'In Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
