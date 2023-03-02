import * as React from 'react'
import {Container, Navbar} from "react-bootstrap"

export function Header()
{
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React Rest Django</Navbar.Brand>
                </Container>
            </Navbar>
        </header>
    )
}