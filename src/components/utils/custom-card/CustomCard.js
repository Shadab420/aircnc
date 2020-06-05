import React from 'react';
import './custom-card.scss';

const CustomCard = (props) => {

    const { image, caption, title, rent, rating } = props;

    return (
        <div class="card-div">
            <img src={image} className="thumbnail" />
            <h6>{caption}</h6>
            <h5>{title}</h5>
            <p>{rent} per person</p>
            {/* <StarRatings
                rating={rating}
                starDimension="40px"
                starSpacing="15px"
            /> */}
        </div>
    );
};

export default CustomCard;