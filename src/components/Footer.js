import React from 'react';


import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import AboutPage from '../pages/AboutPage';

function Footer() {
    return (

        <div className="fixed-bottom" >

            <Navbar className="border-bottom"  expand="lg" style={{  backgroundColor:"#ffbfff" }}>


                <Navbar.Brand style={{ fontSize: '10px' }} >

                    Made with
               
                React </Navbar.Brand>
                <Link style={{ fontSize: '10px', color:'black' }} className="nav-link" to="/about">About </Link>
                <Link style={{ fontSize: '10px', color:'black' }} className="nav-link" to="/contact">Contact </Link>
             
            </Navbar>
            
            
        </div>
   

    )
}
export default Footer;