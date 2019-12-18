/* eslint-disable */
import React, { useState } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { Line } from 'rc-progress';

const ReviewSummary = ({ percentages }) => {
  return (
    <div className="summaryOuterBox">
      <div className="reviewSummaryTitle">Reviews</div>
      <div className="summaryInnerBox">
        {percentages.map((percentage, i) => {
          return (
            <div key={i} className="summaryLine">
              <div className="summaryStars">
                <StarRatingComponent
                  name="reviewSummaryStars"
                  id={i}
                  editing={false}
                  starCount={5}
                  value={5 - i}
                  emptyStarColor={"#D6DADF"}
                  renderStarIcon={() => <div className="aStar">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23 9.56a1 1 0 0 0-.87-.69l-6.6-.54-2.62-5.74A1 1 0 0 0 12 2a1 1 0 0 0-.92.59L8.52 8.33l-6.6.54a1 1 0 0 0-.55 1.77l5 4.07-1.52 6.05a1 1 0 0 0 1.47 1.11L12 18.62l5.68 3.25a1 1 0 0 0 .5.13 1 1 0 0 0 .6-.2 1 1 0 0 0 .37-1l-1.48-6.05 5-4.07A1 1 0 0 0 23 9.56z" fill="currentColor"></path></svg>
                  </div>}
                />
              </div>
              <div className="summaryHistogram">
                <Line
                  className="line"
                  name={i}
                  percent={percentage}
                  strokeWidth="4"
                  trailWidth="4"
                  strokeColor="#6551CC"
                />
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default ReviewSummary;


