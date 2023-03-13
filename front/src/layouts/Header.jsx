import * as React from 'react'
import {Container, Navbar, Nav} from "react-bootstrap"
import {Link} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {useContext} from "react"
import {MainContext} from "../context/mainContext"
import {useTranslation} from "react-i18next"
import Button from "react-bootstrap/Button"
import {logoutUser} from "../store/authAsyncActions"

export function Header() {
    const { username } = useSelector((state) => state.auth)
    const { t } = useTranslation('common')
    const { showModalAuth } = useContext(MainContext)
    const dispatch = useDispatch()

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
                    <Navbar.Collapse className="justify-content-end">
                        {
                            !username ? (
                                <Button onClick={() => showModalAuth()}>
                                    {t('login')}
                                </Button>
                            ) : (
                                <Nav>
                                    <Navbar.Text>
                                        {t('signedName')}
                                    </Navbar.Text>
                                    <Nav.Link onClick={() => dispatch(logoutUser())}>
                                        {username}
                                    </Nav.Link>
                                </Nav>
                            )
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}