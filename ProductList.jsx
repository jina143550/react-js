import React, { useState } from 'react';
import ProductCard from './ProductCard';
import './ProductListing.css';

/**
 * ProductList Component
 * 
 * Displays a list of houseplants grouped by categories with filtering functionality.
 * 
 * Features:
 * - Displays at least 6 unique houseplants per category (Indoor: 10, Outdoor: 6, Succulents: 6)
 * - Groups plants into 3 categories: Indoor, Outdoor, and Succulents
 * - Each plant displays: thumbnail image, name, and price
 * - "Add to Cart" buttons that:
 *   - Add products to shopping cart
 *   - Disable after product is added
 *   - Increment cart icon count (handled by parent component)
 * - Navbar appears on both Product Listing and Cart pages with links to Home, Plants, and Cart
 * - Cart icon shows total number of items dynamically
 */
const ProductList = ({ plants, onAddToCart, cartItems }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Extract unique categories from plants data
  const categories = ['All', ...new Set(plants.map(plant => plant.category))];

  // Filter plants based on selected category
  const filteredPlants = selectedCategory === 'All' 
    ? plants 
    : plants.filter(plant => plant.category === selectedCategory);

  // Check if a plant is already in the cart
  const isInCart = (plantId) => {
    return cartItems.some(item => item.id === plantId);
  };

  return (
    <div className="product-listing">
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">Welcome to Paradise Nursery</h1>
        <p className="hero-subtitle">Discover our collection of beautiful plants to transform your space</p>
      </div>

      {/* Category Filter Section */}
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

      {/* Products Grid - Displays all plants with thumbnails, names, and prices */}
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

      {/* No Products Message */}
      {filteredPlants.length === 0 && (
        <div className="no-products">
          <p>No plants found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
