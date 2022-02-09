import React, { useContext } from 'react';
import FeedbackContext from '../context/FeedBackContext';

function FeedBackStats() {
  // Calculate rating average
  const { feedback } = useContext(FeedbackContext);
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

export default FeedBackStats;
