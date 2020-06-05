import React from 'react';
import './SingleReview.scss';
import { Card } from 'react-bootstrap';
import CustomCard from '../utils/custom-card/CustomCard';

const SingleReview = ({title, shortTitle, image, rent, rating, peopleRated}) => {
    return (
        <div>
            {/* <img src={require('../../assets/images/1.jpg')} className=""/> */}
            {/* <Card style={{ width: '18rem' }}  className="single-review-div">
                <Card.Img variant="top" src={require('../../assets/images/1.jpg')} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                {/* </Card.Body> */}
            {/* </Card>} */}
            <CustomCard
                image={image}
                caption={shortTitle}
                title={title}
                rent={rent}
                rating={rating}
                ratedBy={peopleRated}
            />
        </div>
    );
};

export default SingleReview;