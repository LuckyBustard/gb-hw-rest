import * as React from 'react'
import {Container, Navbar, Nav} from "react-bootstrap"
import {Link} from "react-router-dom"

export function Header()
{
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React Rest Django</Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Projects</Nav.Link>
                            <Nav.Link as={Link} to="/tasks">Tasks</Nav.Link>
                            <Nav.Link as={Link} to="/users">Users</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}