import React, { useState } from 'react';
import { useForm } from 'react-hook-form'
import StyledButton from '../utils/StyledButton/StyledButton';
import './Login.scss'
import { Form, Col, Row } from 'react-bootstrap';
import Auth from './useAuth';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const auth = Auth();
    const history = useHistory();
    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = (data,e) => { 
        e.preventDefault();
        
        const {email, password} = data;
        handleSignIn(email, password);
        
     }
  
    console.log(watch('example')) // watch input value by passing the name of it

    const handleSignIn = (email, password) => {
        auth.signInWithPassword(email, password)
            .then(res => {
                if(res.code !== "auth/user-not-found") history.push('/');
                // console.log(res.user)
                else res.status(500).send({message: res.message});
            })
            .catch(err=>{
                console.log(err)
        })

    }

    return (
        <div className="login-div">
            {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
            <Form onSubmit={handleSubmit(onSubmit)} className="login-form">
                {/* register your input into the hook by invoking the "register" function */}
                {/* <input name="email" ref={register({ required: true })} placeholder="Email" />
                {errors.email && <span>This field is required</span>} */}
                
                {/* include validation with required or other standard HTML validation rules */}
                {/* <input name="password" ref={register({ required: true })} placeholder="Password" /> */}
                {/* errors will return when field validation fails  */}
                {/* {errors.password && <span>This field is required</span>} */}

                <Form.Group as={Row} controlId="formHorizontalEmail">
                    {/* <Form.Label column sm={2}>
                    Email
                    </Form.Label> */}
                    <Col sm={4}></Col>
                    <Col sm={4}>
                    <Form.Control name="email" type="email" ref={register({ required: true })} placeholder="Email" />
                    {errors.email && <span class="form-err">This field is required</span>}
                    </Col>
                    <Col sm={4}></Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPassword">
                    {/* <Form.Label column sm={2}>
                    Password
                    </Form.Label> */}
                    <Col sm={4}></Col>
                    <Col sm={4}>
                    <Form.Control name="password" type="password" ref={register({ required: true })} placeholder="Password" />
                    {errors.password && <span class="form-err">This field is required</span>}
                    </Col>
                    <Col sm={4}></Col>
                </Form.Group>

                
                    <Form.Group as={Row}>
                        <Col sm={4}></Col>
                        <Col sm={4}>
                            <StyledButton type="submit" btnClass="main" btnText="Login" />
                        </Col>
                        <Col sm={4}></Col>
                    </Form.Group>
                
            </Form>
        </div>
    );
};

export default Login;