import React from 'react';
import { FaStar } from 'react-icons/fa';
import './StarRating.scss';


const StarRating = ({rating, ratedBy, numberOfStars}) => {
    return (
        <div>
            
            <span className="rated-by">
                {[...Array(numberOfStars)].map((star, i) => {

                    const ratingValue = i+1;
                    
                    return (
                        
                            <FaStar size={20} className="star" color={ ratingValue <= rating? '#00A799' : '#a8a8aa'} />
                        
                    )
                })}
                {ratedBy}</span>
           
        </div>
    );
};

export default StarRating;