import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  books: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
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
        item_id: uuidv4(),
      };
      state.books.push(bookobject);
    },
    removebook: (state, action) => {
      state.books = state.books.filter((book) => book.item_id !== action.payload.id);
    },
  },
});

export const { addbook, removebook } = bookSlice.actions;
export default bookSlice.reducer;
