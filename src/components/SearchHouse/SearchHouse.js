import React, { useState } from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './SearchHouse.scss';
import StyledButton from '../utils/StyledButton/StyledButton';
import Count from '../utils/count/Count';
import { useHistory, Link } from 'react-router-dom';
import { gatherSearchHouseInfo } from '../../redux/actions/searchHouseActions';
import { connect } from 'react-redux';

const SearchHouse = (props) => {
    const [adults, setAdults] = useState(0);
    const [childs, setChilds ] = useState(0);
    const [babies, setBabies] = useState(0);
    const [guests, setGuests] = useState("");
    let history = useHistory();

    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = data => { 
        props.gatherSearchHouseInfo(data);
        console.log(props.searchInfo)
        history.push('/booking');
    }

  
    console.log(watch('example'))

    const handleSetGuests = () =>{
        setGuests(adults+" Adults, "+childs+" Childs, "+ babies+" Babies");
    }

    return (
        <div className="searchHouse-div">
            <h3>Where do you want to go?</h3>

            <div className="searchHouse-form-div">
                <Form onSubmit={handleSubmit(onSubmit)} className="searchHouse-form">
                    <Form.Group as={Row} controlId="formHorizontalLocation" className="searchHouse-formgroup">
                        <Form.Label column sm={12}>
                            <h4>Location</h4>
                        </Form.Label>
                        
                        <Col sm={10}>
                        <Form.Control name="location" ref={register({ required: true })} placeholder="Add city, Landmark or Address" />
                        {errors.location && <span class="form-err">This field is required</span>}
                        </Col>
                    
                    </Form.Group>

                    <Row>
                        <Col md={6}>
                            <Form.Group as={Row} controlId="formHorizontalArrivalDate" className="searchHouse-formgroup">
                                <Form.Label column sm={12}>
                                <h4>Arrival</h4>
                                </Form.Label>
                                
                                <Col sm={10}>
                                <Form.Control 
                                    name="arrivalDate" 
                                    type="date" 
                                    value= "2020-06-05"
                                    min="2020-06-05"
                                    ref={register({ required: true })} />
                                {errors.arrivalDate && <span class="form-err">This field is required</span>}
                                </Col>
                            
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group as={Row} controlId="formHorizontalDepartureDate" className="searchHouse-formgroup">
                                <Form.Label column sm={12}>
                                <h4>Departure</h4>
                                </Form.Label>
                                
                                <Col sm={10}>
                                <Form.Control 
                                    name="departureDate" 
                                    type="date" 
                                    value= "2020-06-05"
                                    min="2020-06-05"
                                    ref={register({ required: true })}  />
                                {errors.departureDate && <span class="form-err">This field is required</span>}
                                </Col>
                            
                            </Form.Group>

                        </Col>
                    </Row>

                    <Form.Group as={Row} controlId="formHorizontalLocation" className="searchHouse-formgroup">
                        <Form.Label column sm={12}>
                        <h4>Guests</h4>
                        </Form.Label>
                        
                        <Col sm={10}>
                            <Form.Control 
                                name="guests"
                                disabled 
                                ref={register({ required: true })} 
                                value={ guests  } />
                            {errors.guests && <span class="form-err">This field is required</span>}
                        </Col>
                        
                    
                    </Form.Group>


                    <div  className="searchHouse-formgroup guests-div">
                        <input type="hidden" value={guests?adults:''} name="adults" ref={register({ required: true })}  />
                        <input type="hidden" value={guests?childs:''} name="childs" ref={register({ required: true })}  />
                        <input type="hidden" value={guests?babies:''} name="babies" ref={register({ required: true })}  />
                        <Count name="Adults" currentVal={adults} setVal={setAdults} />
                        <Count name="Childs" currentVal={childs} setVal={setChilds} />
                        <Count name="Babies" currentVal={babies} setVal={setBabies} />
                        <StyledButton type="button" btnClass="main2 float-right" btnText="Apply" onClk={handleSetGuests} />
                    </div>

                    
                   
                    <StyledButton type="submit" btnClass="main" btnText="Search"/>
                </Form>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        searchInfo: state.searchInfo,
    }
}

const mapDispatchToProps = {
    gatherSearchHouseInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchHouse);