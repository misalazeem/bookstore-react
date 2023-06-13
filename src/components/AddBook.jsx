import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addbook, postBook } from '../redux/books/booksSlice';

function AddBook() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== '' || author !== '') {
      const bookobject = {
        title,
        author,
      };
      dispatch(addbook(bookobject));
      await dispatch(postBook(bookobject));
      setTitle('');
      setAuthor('');
    }
  };
  return (
    <>
      <div className="Line" />
      <div className="AddBook">
        <h2>ADD NEW BOOK</h2>
        <form id="addbookform">
          <input className="inputfields" type="text" placeholder="Book Name" value={title} onChange={(e) => setTitle(e.target.value)} required />
          <input className="inputfields" type="text" placeholder="Author Name" value={author} onChange={(e) => setAuthor(e.target.value)} required />
          <button className="add-btn" type="submit" onClick={handleSubmit}>Add Book</button>
        </form>
      </div>
    </>
  );
}

export default AddBook;
