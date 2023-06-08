import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PropTypes from 'prop-types';

function Books({ BookList }) {
  return (
    <>
      <div className="books-container">
        {BookList.map((book) => (
          <div className="book-item" key={book.id}>
            <div className="section1">
              <h2>{book.title}</h2>
              <p>{book.author}</p>
              <div className="book-button-section">
                <button type="button">Comments</button>
                <button type="button">Remove</button>
                <button type="button">Edit</button>
              </div>
            </div>
            <div className="section2">
              <div className="progress-bar">
                <CircularProgressbar value={book.progress} text={`${book.progress}%`} />
              </div>
              <div>
                <h2>
                  {book.progress}
                  %
                </h2>
                <p>Completed</p>
              </div>
            </div>
            <div className="section3">
              <p>CURRENT CHAPTER</p>
              <h3>Chapter 17</h3>
              <button type="button">Update Progress</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

Books.propTypes = {
  BookList: PropTypes.func.isRequired,
};

export default Books;
