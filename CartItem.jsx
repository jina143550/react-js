import React from 'react';
import './Cart.css';

/**
 * CartItem Component
 * 
 * Displays the Shopping Cart page with all cart functionalities.
 * 
 * Features:
 * - Shows total cart amount of all plants
 * - Shows total cost for each plant in the cart (price × quantity)
 * - Each plant displays: thumbnail, name, and unit price
 * - Includes buttons to increase and decrease quantity, updating cart correctly
 * - Includes delete button for each item to remove it from cart
 * - Includes checkout button that shows "Coming Soon" message
 * - Includes continue shopping button that links back to product listing page
 * - Navbar appears with links to Home, Plants, and Cart
 * - Cart icon shows total number of items dynamically
 */
const CartItem = ({ cartItems, onUpdateQuantity, onRemoveItem, onContinueShopping }) => {
  // Calculate total cart amount
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Calculate total number of items in cart
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Empty cart state
  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <div className="cart-empty">
          <div className="empty-cart-icon">🛒</div>
          <h2>Your Cart is Empty</h2>
          <p>Add some beautiful plants to your cart!</p>
          <button className="continue-shopping-btn" onClick={onContinueShopping}>
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      {/* Cart Header - Shows total item count */}
      <div className="cart-header">
        <h1>Shopping Cart</h1>
        <p className="cart-items-count">{totalItems} {totalItems === 1 ? 'item' : 'items'}</p>
      </div>

      <div className="cart-content">
        {/* Cart Items Section */}
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              {/* Plant Thumbnail */}
              <img src={item.image} alt={item.name} className="cart-item-image" />
              
              {/* Plant Details - Name and Unit Price */}
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p className="cart-item-category">{item.category}</p>
                <p className="cart-item-price">${item.price.toFixed(2)} each</p>
              </div>
              
              {/* Cart Item Actions */}
              <div className="cart-item-actions">
                {/* Quantity Controls - Increase/Decrease Buttons */}
                <div className="quantity-controls">
                  <button 
                    className="quantity-btn"
                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                    title="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button 
                    className="quantity-btn"
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    title="Increase quantity"
                  >
                    +
                  </button>
                </div>
                
                {/* Total Cost for Each Plant (price × quantity) */}
                <div className="cart-item-subtotal">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
                
                {/* Delete Button */}
                <button 
                  className="remove-btn"
                  onClick={() => onRemoveItem(item.id)}
                  title="Remove item from cart"
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary Section */}
        <div className="cart-summary">
          <h2>Order Summary</h2>
          
          {/* Subtotal - Shows total cart amount */}
          <div className="summary-row">
            <span>Subtotal ({totalItems} items)</span>
            <span>${calculateTotal().toFixed(2)}</span>
          </div>
          
          {/* Shipping */}
          <div className="summary-row">
            <span>Shipping</span>
            <span className="free-shipping">FREE</span>
          </div>
          
          <div className="summary-divider"></div>
          
          {/* Total Cart Amount */}
          <div className="summary-row total">
            <span>Total</span>
            <span>${calculateTotal().toFixed(2)}</span>
          </div>
          
          {/* Checkout Button - Shows "Coming Soon" message */}
          <button 
            className="checkout-btn"
            onClick={() => alert('Coming Soon! Checkout functionality will be available soon.')}
          >
            Proceed to Checkout
          </button>
          
          {/* Continue Shopping Button - Links back to product listing */}
          <button className="continue-shopping-btn" onClick={onContinueShopping}>
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
