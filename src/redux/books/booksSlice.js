import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  books: [],
};

const bookSlice = createSlice({
  name: 'bookstore',
  initialState,
  reducers: {
    addbook: (state, action) => {
      const booktitle = action.payload.title;
      const bookauthor = action.payload.author;
      const bookobject = {
        title: booktitle,
        author: bookauthor,
        id: uuidv4(),
      };
      state.books.push(bookobject);
    },
    removebook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addbook, removebook } = bookSlice.actions;
export default bookSlice.reducer;
