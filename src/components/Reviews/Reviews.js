import React, { useEffect, useState } from 'react';
import SingleReview from '../SingleReview/SingleReview';
import './Reviews.scss';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Reviews = () => {

    const [reviews, setReviews] = useState([])
    const [loadingReviews, setLoadingReviews] = useState(true);

    useEffect(() => {
        fetch('https://lit-island-29260.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                setLoadingReviews(false);
            });
    }, [])

    return (
        <div className="reviews-div">
            <div className="d-flex justify-content-between">
                <h3>Experiences</h3>
                <Link to="/">See all</Link>
            </div>
            <Row>
                {
                    !loadingReviews && reviews.map((review, index) => {
                        return review.category === "experience" && (
                                <Col lg={3} md={6} sm={12} xs={12}>
                                    <SingleReview 
                                        title={review.title}
                                        shortTitle={review.short_title}
                                        image={review.image}
                                        rent={review.rent}
                                        rating={review.rating} 
                                        peopleRated={review.people_rated}/>
                                </Col>
                            )
                        

                    })
                }

                { loadingReviews && <p>Loading...</p> }
                    
            </Row>

            <div className="d-flex justify-content-between">
                <h3>Homes</h3>
                <Link to="/">See all</Link>
            </div>
            <Row>
                {
                    reviews && reviews.map((review, index) => {
                        return review.category === "experience" && (
                                <Col lg={4} md={6} sm={12} xs={12}>
                                    <SingleReview 
                                        title={review.title}
                                        shortTitle={review.short_title}
                                        image={review.image}
                                        rent={review.rent}
                                        rating={review.rating} 
                                        peopleRated={review.people_rated}/>
                                </Col>
                            )
                        

                    })
                }

                { loadingReviews && <p>Loading...</p> }
            </Row>
            
            
        </div>
    );
};

export default Reviews;