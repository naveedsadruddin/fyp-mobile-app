import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; // Import your cart reducer
import userReducer from './userSlice'; // Import your user reducer

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});

export default store;
