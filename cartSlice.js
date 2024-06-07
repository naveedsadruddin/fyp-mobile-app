import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push(action.payload);
      }
      state.totalQuantity++;
      state.totalAmount += action.payload.price * action.payload.quantity;
    },
    removeItem: (state, action) => {
      const itemIndex = state.items.findIndex(item => item.id === action.payload);
      state.items.splice(itemIndex, 1);
      state.totalQuantity -= state.items[itemIndex].quantity;
      state.totalAmount -= state.items[itemIndex].price * state.items[itemIndex].quantity;
    },
    updateQuantity: (state, action) => {
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
      state.items[itemIndex].quantity = action.payload.quantity;
      state.totalQuantity += action.payload.quantityChange; // Adjust totalQuantity based on quantity change
      state.totalAmount += action.payload.priceChange; // Adjust totalAmount based on price change
    },
    // Add more reducers as needed (clear cart, etc.)
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
