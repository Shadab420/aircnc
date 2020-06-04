import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import './NavigationBar.scss';

const NavigationBar = () => {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="light" className="my-navbar">
            <Navbar.Brand href="#home" className="mr-auto mx-5">
            <img
                src= {require('../../assets/images/logo.PNG')}
                width="145"
                height="50"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto mx-5">
                    <a href="#home" className="my-nav-link mr-5">Host your home</a>
                    <a href="#features" className="my-nav-link mr-5">Host your experience</a>
                    <a href="#home" className="my-nav-link mr-5">Help</a>
                    <a href="#features" className="my-nav-link mr-5">Login</a>
                    <a href="#pricing" className="my-nav-link mr-5"><span className="sign-up-btn">Signup</span></a>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </>
    );
};

export default NavigationBar;