import { configureStore } from '@reduxjs/toolkit';
import booksSlice, { addbook } from './books/booksSlice';
import categoriesSlice, { status } from './categories/categoriesSlice';

export const store = configureStore({
  reducer: {
    bookstore: booksSlice,
    categories: categoriesSlice,
  },
});

const book1 = { title: 'Book 1', author: 'Author 1' };
store.dispatch(addbook(book1)); // testing the addbook

const book2 = { title: 'Book 2', author: 'Author 2' };
store.dispatch(addbook(book2)); // testing the addbook

store.dispatch(status()); // testing the status

export default store;
