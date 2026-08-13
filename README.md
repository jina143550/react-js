# 🌿 Paradise Nursery Shopping Cart

A modern, responsive e-commerce web application for browsing and purchasing houseplants. Built with React and Vite, featuring a beautiful user interface with dynamic cart management and category-based product filtering.

---

## 📋 Project Overview

**Paradise Nursery** is a full-featured online plant shopping platform where users can:
- Browse a curated collection of 22+ houseplants across multiple categories
- Filter plants by category (Indoor, Outdoor, Succulents)
- Add plants to a shopping cart with real-time updates
- Manage cart items with quantity controls
- View detailed product information and pricing
- Experience a beautiful, nature-themed UI with background imagery

---

## ✨ Features

### 🏠 Landing Page
- Eye-catching hero section with company branding
- "Paradise Nursery - Where Green Meets Serenity" tagline
- Beautiful background image with overlay
- "Get Started" call-to-action button

### 🛍️ Product Listing (ProductList.jsx)
- **22 unique houseplants** across 3 categories:
  - Indoor Plants (10 varieties)
  - Outdoor Plants (6 varieties)
  - Succulents (6 varieties)
- Each product displays:
  - High-quality thumbnail image
  - Plant name and description
  - Price
  - Category badge
- **Category filtering** - Filter by All, Indoor, Outdoor, or Succulents
- **Smart "Add to Cart" buttons**:
  - Adds product to cart
  - Disables after adding (shows "In Cart")
  - Prevents duplicate additions
  - Updates cart count dynamically

### 🛒 Shopping Cart (CartItem.jsx)
- **Complete cart management**:
  - Display all cart items with thumbnails
  - Show plant name and unit price
  - Calculate total cost per item (price × quantity)
  - Display total cart amount
- **Quantity controls**:
  - Increase/decrease buttons
  - Real-time cart updates
  - Minimum quantity of 1
- **Item management**:
  - Delete button to remove items
  - Empty cart state with friendly message
- **Checkout features**:
  - "Proceed to Checkout" button (Coming Soon alert)
  - "Continue Shopping" button
  - Free shipping indicator
  - Order summary with subtotal and total

### 🧭 Navigation
- **Responsive navbar** with links to:
  - Home (Landing page)
  - Plants (Product listing)
  - Cart (Shopping cart)
- **Dynamic cart badge** showing total item count
- Active page highlighting
- Clickable logo returning to products

### 📱 Additional Pages
- **About Us** - Company information, mission, and contact details
- Responsive design for mobile, tablet, and desktop

---

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with modern features (Grid, Flexbox, Animations)
- **Redux Toolkit** - State management (CartSlice.jsx)
- **React Hooks** - useState for component state management
- **Unsplash API** - High-quality plant images

---

## 📁 Project Structure

```
shopping-cart/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── ProductList.jsx       # Main product listing component
│   │   ├── CartItem.jsx          # Shopping cart component
│   │   ├── ProductCard.jsx       # Individual product card
│   │   ├── ProductListing.jsx    # Product listing wrapper
│   │   ├── Cart.jsx              # Alternative cart implementation
│   │   ├── Header.jsx            # Navigation bar
│   │   ├── AboutUs.jsx           # About page
│   │   └── [CSS files]           # Component styles
│   ├── data/
│   │   └── plants.js             # Product data (22 plants)
│   ├── assets/
│   │   └── vite.svg
│   ├── CartSlice.jsx             # Redux cart slice
│   ├── App.jsx                   # Main app component
│   ├── App.css                   # App-level styles
│   ├── index.css                 # Global styles
│   └── main.jsx                  # App entry point
├── index.html
├── package.json
├── vite.config.js
├── IMPLEMENTATION_SUMMARY.md     # Detailed implementation notes
└── README.md                     # This file
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd shopping-cart
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

---

## 📊 Product Categories

### Indoor Plants (10 varieties)
- Monstera Deliciosa - $29.99
- Snake Plant - $19.99
- Fiddle Leaf Fig - $39.99
- Pothos - $14.99
- Peace Lily - $24.99
- Rubber Plant - $27.99
- Boston Fern - $22.99
- Bird of Paradise - $44.99
- ZZ Plant - $26.99
- Chinese Money Plant - $21.99

### Outdoor Plants (6 varieties)
- Lavender - $16.99
- Rosemary - $12.99
- Hydrangea - $32.99
- Geranium - $13.99
- Marigold - $9.99
- Petunias - $11.99

### Succulents (6 varieties)
- Aloe Vera - $15.99
- Jade Plant - $18.99
- Echeveria - $12.99
- String of Pearls - $16.99
- Haworthia - $14.99
- Sedum Mix - $13.99

---

## 🎯 Key Functionalities

### Cart Management
- **Add to Cart**: Click "Add to Cart" on any product
- **Update Quantity**: Use +/- buttons in cart
- **Remove Items**: Click the × button
- **View Total**: See real-time cart total
- **Continue Shopping**: Return to products from cart
- **Checkout**: Coming Soon functionality

### State Management
The app uses React's `useState` hook for local state management:
- `currentPage` - Tracks active page (landing, products, cart)
- `cartItems` - Array of cart items with quantities
- Cart operations: `handleAddToCart`, `handleUpdateQuantity`, `handleRemoveItem`

### Redux Implementation
`CartSlice.jsx` includes three reducer functions:
- `addItem()` - Adds item or increments quantity
- `removeItem()` - Removes item from cart
- `updateQuantity()` - Updates item quantity

---

## 🎨 Design Features

- **Modern UI/UX** with clean, intuitive interface
- **Responsive design** for all screen sizes
- **Green color scheme** matching the nursery theme
- **Smooth animations** and transitions
- **Background imagery** with semi-transparent overlay
- **Hover effects** on buttons and cards
- **Category badges** for easy identification
- **Empty state handling** with friendly messages

---

## 📝 Assignment Requirements

### Task 6: ProductList.jsx ✅
- ✅ Display at least 6 unique houseplants per category
- ✅ Group plants into at least 3 categories
- ✅ Show thumbnail, name, and price for each plant
- ✅ Add to Cart buttons with disable functionality
- ✅ Navbar with Home, Plants, and Cart links
- ✅ Dynamic cart icon count

### Task 7: CartItem.jsx ✅
- ✅ Show total cart amount
- ✅ Show total cost for each plant
- ✅ Display thumbnail, name, and unit price
- ✅ Increase/decrease quantity buttons
- ✅ Delete button for each item
- ✅ Checkout button with "Coming Soon" message
- ✅ Continue shopping button

---

## 🔮 Future Enhancements

- [ ] User authentication and accounts
- [ ] Wishlist functionality
- [ ] Product reviews and ratings
- [ ] Search functionality
- [ ] Payment integration
- [ ] Order history
- [ ] Plant care tips and guides
- [ ] Seasonal promotions
- [ ] Email notifications
- [ ] Backend API integration

---

## 👨‍💻 Author

**Paradise Nursery Development Team**

---

## 📄 License

This project is part of a learning assignment and is available for educational purposes.

---

## 🙏 Acknowledgments

- Plant images from [Unsplash](https://unsplash.com)
- Icons and emojis for enhanced UI
- React and Vite communities for excellent documentation

---

## 📞 Contact

For questions or support:
- 📧 Email: info@paradisenursery.com
- 📞 Phone: +1 (555) 123-4567
- 📍 Location: 123 Green Street, Garden City, GC 12345

---

**Happy Planting! 🌱**
