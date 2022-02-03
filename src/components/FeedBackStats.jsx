import React from 'react';
import PropTypes from 'prop-types';

function FeedBackStats({ feedback }) {
  // Calculate rating average
  let average =
    feedback.reduce((accumulator, current) => {
      return accumulator + current.rating;
    }, 0) / feedback.length;

  average = average.toFixed(1);

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average rating: {isNaN(average) ? '0.0' : average}</h4>
    </div>
  );
}

FeedBackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
};

export default FeedBackStats;
