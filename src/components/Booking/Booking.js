import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

const Booking = (props) => {

    const {searchInfo} = props;
    
    return (
        <div>
            <Row>
                <Col lg={6} md={6} sm={12} xs={12}>
                    
                </Col>
                <Col lg={6} md={6} sm={12} xs={12}>
                    <h3>Map</h3>
                </Col>
            </Row>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        searchInfo: state.searchHouse,
    }
}


export default connect(mapStateToProps)(Booking);