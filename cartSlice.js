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
        state.products.push({ ...action.payload, quantity: 1 });
      }
      state.totalQuantity++;
      state.totalAmount += action.payload.price;
    },
    removeItem: (state, action) => {
      const itemIndex = state.products.findIndex(item => item.id === action.payload);
      if (itemIndex !== -1) {
        state.totalQuantity -= state.products[itemIndex].quantity;
        state.totalAmount -= state.products[itemIndex].price * state.products[itemIndex].quantity;
        state.products.splice(itemIndex, 1);
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantityChange, priceChange } = action.payload;
      const itemIndex = state.products.findIndex(item => item.id === id);
      if (itemIndex !== -1) {
        // Calculate new quantity
        const newQuantity = state.products[itemIndex].quantity + quantityChange;

        // Ensure quantity does not drop below zero
        if (newQuantity > 0) {
          // Update the quantity of the specific product
          state.products[itemIndex].quantity = newQuantity;

          // Recalculate the total price for the specific product
          state.products[itemIndex].totalPrice = state.products[itemIndex].price * newQuantity;

          // Update the total quantity and total amount in the cart
          state.totalQuantity += quantityChange;
          state.totalAmount += priceChange;
        } else {
          // Remove the item if quantity is zero or less
          state.totalQuantity -= state.products[itemIndex].quantity;
          state.totalAmount -= state.products[itemIndex].price * state.products[itemIndex].quantity;
          state.products.splice(itemIndex, 1);
        }
      }
    },
    emptyCart: (state) => {
      state.products = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const { addItem, removeItem, updateQuantity, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
