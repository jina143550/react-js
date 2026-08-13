import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ProductListing from './components/ProductListing'
import Cart from './components/Cart'
import { plants } from './data/plants'

function App() {
  const [currentPage, setCurrentPage] = useState('landing')
  const [cartItems, setCartItems] = useState([])

  const handleAddToCart = (plant) => {
    const existingItem = cartItems.find(item => item.id === plant.id)
    
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === plant.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ))
    } else {
      setCartItems([...cartItems, { ...plant, quantity: 1 }])
    }
  }

  const handleUpdateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return
    
    setCartItems(cartItems.map(item =>
      item.id === itemId
        ? { ...item, quantity: newQuantity }
        : item
    ))
  }

  const handleRemoveItem = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId))
  }

  const handleNavigate = (page) => {
    setCurrentPage(page)
  }

  const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <div className="app">
      <Header 
        cartCount={totalCartItems}
        onNavigate={handleNavigate}
        currentPage={currentPage}
      />
      <main className="main-content">
        {currentPage === 'landing' ? (
          <div className="landing-page">
            <div className="landing-content">
              <h1 className="company-name">Paradise Nursery</h1>
              <p className="tagline">Where Green Meets Serenity</p>
              <button 
                className="get-started-btn"
                onClick={() => handleNavigate('products')}
              >
                Get Started
              </button>
            </div>
          </div>
        ) : currentPage === 'products' ? (
          <ProductListing 
            plants={plants}
            onAddToCart={handleAddToCart}
            cartItems={cartItems}
          />
        ) : (
          <Cart 
            cartItems={cartItems}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            onContinueShopping={() => handleNavigate('products')}
          />
        )}
      </main>
    </div>
  )
}

export default App
