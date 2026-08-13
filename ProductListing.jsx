import React, { useState } from 'react';
import ProductCard from './ProductCard';
import './ProductListing.css';

const ProductListing = ({ plants, onAddToCart, cartItems }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(plants.map(plant => plant.category))];

  const filteredPlants = selectedCategory === 'All' 
    ? plants 
    : plants.filter(plant => plant.category === selectedCategory);

  const isInCart = (plantId) => {
    return cartItems.some(item => item.id === plantId);
  };

  return (
    <div className="product-listing">
      <div className="hero-section">
        <h1 className="hero-title">Welcome to Paradise Nursery</h1>
        <p className="hero-subtitle">Discover our collection of beautiful plants to transform your space</p>
      </div>

      <div className="category-filter">
        <h2>Shop by Category</h2>
        <div className="category-buttons">
          {categories.map(category => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="products-grid">
        {filteredPlants.map(plant => (
          <ProductCard
            key={plant.id}
            plant={plant}
            onAddToCart={onAddToCart}
            isInCart={isInCart(plant.id)}
          />
        ))}
      </div>

      {filteredPlants.length === 0 && (
        <div className="no-products">
          <p>No plants found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default ProductListing;
