import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import './App.css';
import './Footer.css';

function Footer() {
    return(
        <Navbar className="Footer" fixed="bottom">
            <Container className="Footer-container">
                <Navbar.Text className="Footer-text">Created and maintained by FeedRL</Navbar.Text>
            </Container>
        </Navbar>
    );
}

export default Footer;