import React from 'react';
import './SingleReview.scss';
import { Card } from 'react-bootstrap';
import CustomCard from '../utils/custom-card/CustomCard';

const SingleReview = () => {
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
                image={require('../../assets/images/1.jpg')}
                caption="Nightlife - NewYork"
                title="Discover the city's party scene"
                rent="35"
                rating="2.403"
            />
        </div>
    );
};

export default SingleReview;