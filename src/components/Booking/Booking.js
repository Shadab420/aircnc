import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import MapGL, { Marker, NavigationControl, ScaleControl } from 'react-map-gl';
import './Booking.scss';
import { FaMapPin, FaMapMarker, FaMapMarkerAlt } from 'react-icons/fa';
import CustomCard from '../utils/custom-card/CustomCard';
import CustomCardTwo from '../utils/custom-card/CustomCardTwo';
require('dotenv').config();

const Booking = (props) => {

    const {searchInfo} = props;
    const [viewport, setViewport] = useState({
        latitude: 23.7999,
		longitude: 90.4208,
        zoom: 14,
        bearing: 0,
        pitch: 0
      });

      const geojson = [
          {
              name: "House A",
              latitude: 23.7925,
		      longitude: 90.4078
          },

          {
            name: "House B",
            latitude: 23.7999,
            longitude: 90.4208
          },
          {
            name: "House C",
            latitude: 23.8025,
            longitude: 90.4308
          },
          {
              name: "House D",
              latitude: 23.7950,
              longitude: 90.4280
          },

          {
            name: "House E",
            latitude: 23.7950,
            longitude: 90.4180
          },

      ];

    const [houses, setHouses] = useState([]);
    const [loadingHouses, setLoadingHouses] = useState(true);
      
      useEffect(() => {
        fetch('https://lit-island-29260.herokuapp.com/houses')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setHouses(data);
            setLoadingHouses(false);
        });
      }, [])
      
    
    return (
        <div className="booking-div">
            <Row>
                <Col lg={6} md={6} sm={12} xs={12}>
                   

                {
                    !loadingHouses && houses.map((house, index) => {
                        return (
                                    <CustomCardTwo
                                        name={house.name}
                                        description = {house.description}
                                        rooms={house.rooms}
                                        images={house.images}
                                        features={house.features}
                                        rent={house.rent}
                                        category={house.category}
                                        rating={house.rating} 
                                        peopleRated={house.people_rated}/>
                                
                            )
                        

                    })
                }

                { loadingHouses && <p>Loading...</p> }
                    
                </Col>
                <Col lg={6} md={6} sm={12} xs={12}>
                    <MapGL
                        {...viewport}
                        width="100%"
                        height="100vh"
                        mapStyle="mapbox://styles/mapbox/streets-v11"
                        onViewportChange={nextViewport => setViewport(nextViewport)}
                        mapboxApiAccessToken={process.env.REACT_APP_MAP_TOKEN}
                    >
                        {
                            geojson.map((geo, index) =>{
                                return (
                                    <Marker latitude={geo.latitude} longitude={geo.longitude}>
                                       <FaMapMarkerAlt className="marker"/> <span className="markar-span">{geo.name}</span>
                                    </Marker>
                                )
                            })
                        }
                        
                        {/* <NavigationControl /> */}
                        <ScaleControl />
                    </MapGL>
                    
                    
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