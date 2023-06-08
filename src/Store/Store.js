import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './Reducers/goods';

export const store = configureStore({
    reducer: {
        cart: cartReducer
    }
  })