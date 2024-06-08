import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  totalQuantity: 0,
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.products.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.products.push(action.payload);
      }
      state.totalQuantity++;
      state.totalAmount += action.payload.price * action.payload.quantity;
      console.log(state)
    },
    removeItem: (state, action) => {
      const itemIndex = state.products.findIndex(item => item.id === action.payload);
      state.totalQuantity -= state.products[itemIndex].quantity;
      state.totalAmount -= state.products[itemIndex].price * state.products[itemIndex].quantity;
      state.products.splice(itemIndex, 1);
    },
    updateQuantity: (state, action) => {
      const { id, quantityChange, priceChange } = action.payload;
      const itemIndex = state.products.findIndex(item => item.id === id);
      
      if (itemIndex !== -1) {
        // Update the quantity of the specific product
        state.products[itemIndex].quantity += quantityChange;
    
        // Recalculate the total price for the specific product
        state.products[itemIndex].totalPrice = state.products[itemIndex].price * state.products[itemIndex].quantity;
    
        // Update the total quantity and total amount in the cart
        state.totalQuantity += quantityChange;
        state.totalAmount += priceChange;
      }
    },
    // Add more reducers as needed (clear cart, etc.)
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
