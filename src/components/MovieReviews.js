// Code MovieReviews Here
import React, { Component} from 'react';
    const MovieReviews = (props) =>

            <div className="review-list">
            {props.reviews.map(review => (
             <li className="review">
                 {`${review.summary_short}`}
           </li>
            ))}
        </div>

    export default MovieReviews;

        
    
