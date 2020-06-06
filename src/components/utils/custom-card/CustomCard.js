import React from 'react';
import './custom-card.scss';
import StarRating from '../StarRating/StarRating';

const CustomCard = (props) => {

    const { image, caption, title, rent, rating, ratedBy } = props;

    return (
        <div class="card-div">
            <img src={image} className="thumbnail" />
            <h6>{caption}</h6>
            <h5>{title}</h5>
            <p>${rent} per person</p>
            <span><StarRating rating={rating} ratedBy={ratedBy} numberOfStars={5} /></span>
        </div>
    );
};

export default CustomCard;