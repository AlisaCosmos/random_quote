import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetchJsonp from 'fetch-jsonp';

export const fetchQuote = createAsyncThunk('quote/fetchQuoteStatus', async () => {
  const response = await fetchJsonp(
    'https://api.forismatic.com/api/1.0/?method=getQuote&key=random&format=jsonp&lang=ru&jsonp=?',
    {
      jsonpCallback: 'jsonp',
    },
  );
  return response.json();
});

const initialState = {
  items: [],
  status: 'loading', //loading | success | error
};

const quoteSlice = createSlice({
  name: 'quote',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchQuote.pending]: (state, action) => {
      state.status = 'loading';
      state.items = [];
    },
    [fetchQuote.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    },
    [fetchQuote.rejected]: (state, action) => {
      state.status = 'error';
      state.items = [];
    },
  },
});

export const { setItems } = quoteSlice.actions;

export default quoteSlice.reducer;
