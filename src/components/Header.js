import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Header() {
    return (
       


            <Container className="p-0" fluid={true}>
                <Navbar className="border-bottom" bg="transparent" expand="lg">
                    <Navbar.Brand> Rakibul Hasan </Navbar.Brand>

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

            </Container>
    
    );
}

export default Header;