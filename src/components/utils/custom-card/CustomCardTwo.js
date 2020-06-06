import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './custom-card-two.scss';
import StarRating from '../StarRating/StarRating';

const CustomCardTwo = ({name, description, rooms, features, rent, category, rating, peopleRated, images}) => {
    console.log(images[0])
    return (
        <div className="card-div">
            <Row>
                <Col lg={6} md={6} sm={6}>
                    <img src={images[0]} className="thumbnail"/>
                </Col>
                <Col lg={6} md={6} sm={6}>
                    <h5>{name}</h5>
                    <p> { rooms.map((room,i) => <span key={i}>{room+" "}</span>) }</p>
                    <ul>
                        {
                            features.map((feature, id)=> <li key={id}>{feature}</li> )
                        }
                        
                        
                    </ul>
                    <div className="d-flex">
                        <StarRating rating={3} ratedBy={34} numberOfStars={1} />
                        <div className="bill-div">
                            <h5>${rent} / {category}</h5>
                            {/* <h5>$35 / night</h5> */}
                            <p>$150 total</p>
                        </div>
                    </div>
                </Col>
            </Row>
            
        </div>
    );
};

export default CustomCardTwo;