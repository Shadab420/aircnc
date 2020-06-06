import React from 'react';
import {
    Link
  } from "react-router-dom";
import { useAuth } from '../Login/useAuth';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap'
import './NavigationBar.scss';

const NavigationBar = () => {
    const auth = useAuth();
    const handleSignOut = () => {
        auth.signOut()
            .then(res => {
                window.location.pathname = '/';
            })
      }
    return (
        <>
        <Navbar collapseOnSelect expand="lg"  className="my-navbar">
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
                    {
                        auth.user?(
                            <span>
                                <Button variant="danger" className="my-nav-link mr-5" onClick={handleSignOut}>Signout</Button>
                            </span>

                        ):(
                            <span>
                                <Link to="/login" className="my-nav-link mr-5">Login</Link>
                                <Link to="/signup" className="my-nav-link mr-5"><span className="sign-up-btn">Signup</span></Link>
                                </span>
                        )
                    }   
                    </Nav>
            </Navbar.Collapse>
        </Navbar>
        </>
    );
};

export default NavigationBar;