import React from 'react';
import './Cart.css';

const Cart = ({ cartItems, onUpdateQuantity, onRemoveItem, onContinueShopping }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

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
      <div className="cart-header">
        <h1>Shopping Cart</h1>
        <p className="cart-items-count">{totalItems} {totalItems === 1 ? 'item' : 'items'}</p>
      </div>

      <div className="cart-content">
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p className="cart-item-category">{item.category}</p>
                <p className="cart-item-price">${item.price.toFixed(2)} each</p>
              </div>
              <div className="cart-item-actions">
                <div className="quantity-controls">
                  <button 
                    className="quantity-btn"
                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button 
                    className="quantity-btn"
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <div className="cart-item-subtotal">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
                <button 
                  className="remove-btn"
                  onClick={() => onRemoveItem(item.id)}
                  title="Remove item"
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Subtotal ({totalItems} items)</span>
            <span>${calculateTotal().toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span className="free-shipping">FREE</span>
          </div>
          <div className="summary-divider"></div>
          <div className="summary-row total">
            <span>Total</span>
            <span>${calculateTotal().toFixed(2)}</span>
          </div>
          <button className="checkout-btn">Proceed to Checkout</button>
          <button className="continue-shopping-btn" onClick={onContinueShopping}>
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
