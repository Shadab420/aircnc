import React from 'react';
import './Home.scss';
import { Row, Col, Container } from 'react-bootstrap';
import Reviews from '../Reviews/Reviews';
import SearchHouse from '../SearchHouse/SearchHouse';

const Home = () => {
    return (
        <div className="home-div">
            <Container fluid>
            Home Component
            <Row>
                <Col md={4} sm={12} xs={12}>
                    <SearchHouse/>
                </Col>
                <Col md={8} sm={12}  xs={12}>
                    <Reviews/>
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Home;