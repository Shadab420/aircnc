import React from 'react';
import SingleReview from '../SingleReview/SingleReview';
import './Reviews.scss';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Reviews = () => {
    return (
        <div>
            <div className="d-flex justify-content-between">
                <h3>Experiences</h3>
                <Link to="/">See all</Link>
            </div>
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

            <div className="d-flex justify-content-between">
                <h3>Homes</h3>
                <Link to="/">See all</Link>
            </div>
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
            
            
        </div>
    );
};

export default Reviews;