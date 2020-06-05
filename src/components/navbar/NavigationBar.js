import React from 'react';
import {
    Link
  } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import './NavigationBar.scss';

const NavigationBar = () => {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="light" className="my-navbar">
            <Link to="/home" className="mr-auto mx-5">
            <img
                src= {require('../../assets/images/logo.PNG')}
                width="145"
                height="50"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            />
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto mx-5">
                    <Link to="/" className="my-nav-link mr-5">Host your home</Link>
                    <Link to="/" className="my-nav-link mr-5">Host your experience</Link>
                    <Link to="/" className="my-nav-link mr-5">Help</Link>
                    <Link to="/login" className="my-nav-link mr-5">Login</Link>
                    <Link to="/signup" className="my-nav-link mr-5"><span className="sign-up-btn">Signup</span></Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </>
    );
};

export default NavigationBar;