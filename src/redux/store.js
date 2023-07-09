import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slice/theme';
import quoteReducer from './slice/quoteSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    quote: quoteReducer,
  },
});
