import React from 'react';
import PropTypes from 'prop-types';
import Books from './Books';

function BooksList({ BookList }) {
  return (
    <>
      {BookList.map((book) => (
        <Books key={book.id} title={book.title} author={book.author} progress={book.progress} />
      ))}
    </>
  );
}

BooksList.propTypes = {
  BookList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      progress: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default BooksList;
