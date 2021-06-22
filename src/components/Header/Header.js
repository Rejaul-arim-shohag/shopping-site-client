import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" >
                <Navbar.Brand style={{marginLeft:"10%"}}  href="#home">BARISALBAZAR</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    
                    <Nav style={{marginLeft:"60%"}}>
                       <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/orders">Orders</Nav.Link>
                        <Nav.Link href="/admin">Admin</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>    
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;