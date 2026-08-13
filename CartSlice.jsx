import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id)
      
      if (existingItem) {
        // If item already exists in cart, increment quantity
        existingItem.quantity += 1
      } else {
        // If item doesn't exist, add it with quantity 1
        state.items.push({
          ...action.payload,
          quantity: 1
        })
      }
    },

    removeItem: (state, action) => {
      // Remove item from cart by filtering out the item with matching id
      state.items = state.items.filter(item => item.id !== action.payload)
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload
      const item = state.items.find(item => item.id === id)
      
      if (item) {
        // Update the quantity if item is found
        // Ensure quantity is at least 1
        item.quantity = quantity > 0 ? quantity : 1
      }
    }
  }
})

// Export action creators
export const { addItem, removeItem, updateQuantity } = cartSlice.actions

// Export reducer
export default cartSlice.reducer
