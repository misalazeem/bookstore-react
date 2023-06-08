import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PropTypes from 'prop-types';

function Books({
  title, author, progress,
}) {
  return (
    <>
      <div className="books-container">
        <div className="book-item">
          <div className="section1">
            <h2>{title}</h2>
            <p>{author}</p>
            <div className="book-button-section">
              <button type="button">Comments</button>
              <button type="button">Remove</button>
              <button type="button">Edit</button>
            </div>
          </div>
          <div className="section2">
            <div className="progress-bar">
              <CircularProgressbar value={progress} text={`${progress}%`} />
            </div>
            <div>
              <h2>
                {progress}
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
      </div>
    </>
  );
}

Books.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
};

export default Books;
