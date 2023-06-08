import React from 'react';

function AddBook() {
  return (
    <>
      <div className="AddBook">
        <h2>Add Book</h2>
        <form id="addbookform">
          <input type="text" placeholder="Book Name" />
          <br />
          <br />
          <input type="text" placeholder="Author Name" />
          <br />
          <br />
          <button type="button">Add Book</button>
        </form>
      </div>
    </>
  );
}

export default AddBook;
