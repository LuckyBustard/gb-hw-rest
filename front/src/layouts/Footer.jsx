import * as React from 'react'
import {Col, Container, Row} from "react-bootstrap"

export function Footer() {
    return (
        <footer className="bg-dark text-light page-footer pt-4 pb-4">
            <Container className="h-100">
                <Row className="h-75 align-items-end pb-2">
                    <Col></Col>
                </Row>
                <Row className="h-25 align-items-end">
                    <Col className="text-end">
                        React Front Django Rest©
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}