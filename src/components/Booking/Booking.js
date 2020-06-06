import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import MapGL from 'react-map-gl';
require('dotenv').config();

const Booking = (props) => {

    const {searchInfo} = props;
    const [viewport, setViewport] = useState({
        latitude: 23.808217,
		longitude: 90.411655,
        zoom: 14,
        bearing: 0,
        pitch: 0
      });
    
    
    return (
        <div>
            <Row>
                <Col lg={6} md={6} sm={12} xs={12}>
                    
                </Col>
                <Col lg={6} md={6} sm={12} xs={12}>
                    <MapGL
                        {...viewport}
                        width="100%"
                        height="100vh"
                        mapStyle="mapbox://styles/mapbox/streets-v11"
                        onViewportChange={nextViewport => setViewport(nextViewport)}
                        mapboxApiAccessToken={process.env.REACT_APP_MAP_TOKEN}
                    />
                    
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