import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import {Link} from 'gatsby'

function Header({ title }) {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand as={Link} to="/" >{title}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/page2">Page2</Nav.Link>
                        

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header