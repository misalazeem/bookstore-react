import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/gc8TXJv2KAPg5ObBn77r/books';
const initialState = {
  books: [],
  isLoading: true,
};

export const fetchBooks = createAsyncThunk('books/getBooks', async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw Error('Failed to fetch books');
  }
});

export const postBook = createAsyncThunk('books/postBooks', async (book) => {
  try {
    const response = await axios.post(url, {
      item_id: uuidv4(),
      title: book.title,
      author: book.author,
      category: 'Book',
    });
    return response.data;
  } catch (error) {
    throw Error('Failed to post book');
  }
});

export const deleteBook = createAsyncThunk('books/daleteBook', async (id) => {
  const deleteurl = `${url}/${id.id}`;
  try {
    const response = await axios.delete(deleteurl, {
      item_id: id.id,
    });
    return response.data;
  } catch (error) {
    throw Error('Failed to delete book');
  }
});

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = Object.entries(action.payload).map(([id]) => ({
          title: action.payload[id][0].title,
          author: action.payload[id][0].author,
          item_id: id,
        }));
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { addbook, removebook } = bookSlice.actions;
export default bookSlice.reducer;
