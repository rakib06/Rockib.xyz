import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand'
function Footer() {
    return (

        <div className="fixed-bottom"  >

            <Navbar className="border-bottom"  expand="lg" style={{ height: "20px", backgroundColor:"#ffb3b3" }}>


                <Navbar.Brand style={{ fontSize: '10px' }} >

                    Made with
               
                React </Navbar.Brand>

                <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
                <Navbar.Collapse id="navbar-toggle">
                    <Nav className="ml-auto">
                        <Link className="nav-link" to="/">Skills</Link>
                        <Link className="nav-link" to="/w">Projects</Link>
                        <Link className="nav-link" to="/w">Works</Link>
                        <Link className="nav-link" to="/w">Awards</Link>
                        <Link className="nav-link" to="/w">Youtube</Link>
                        <Link className="nav-link" to="/about">About</Link>
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </div>

    )
}
export default Footer;