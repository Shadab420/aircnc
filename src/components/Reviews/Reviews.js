import React from 'react';
import SingleReview from '../SingleReview/SingleReview';
import './Reviews.scss';
import { Row, Col } from 'react-bootstrap';

const Reviews = () => {
    return (
        <div>
            <h3>Experiences</h3>
            <Row>
                    <Col lg={3} md={6} sm={12} xs={12}>
                        <SingleReview/>
                    </Col>
                    <Col lg={3} md={6} sm={12} xs={12}>
                        <SingleReview/>
                    </Col>
                    <Col lg={3} md={6} sm={12} xs={12}>
                        <SingleReview/>
                    </Col>
                    <Col lg={3} md={6} sm={12} xs={12}>
                        <SingleReview/>
                    </Col>
            </Row>

            <h3>Experiences</h3>
            <Row>
                    <Col md={3} sm={12}>
                        <SingleReview/>
                    </Col>
                    <Col md={3} sm={12}>
                        <SingleReview/>
                    </Col>
                    <Col md={3} sm={12}>
                        <SingleReview/>
                    </Col>
                    <Col md={3} sm={12}>
                        <SingleReview/>
                    </Col>
            </Row>
            
            
        </div>
    );
};

export default Reviews;