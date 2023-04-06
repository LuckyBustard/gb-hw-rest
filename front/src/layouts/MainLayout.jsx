import * as React from 'react'
import {Col, Container, Row, ThemeProvider} from "react-bootstrap"
import {Header} from "./Header"
import {Footer} from "./Footer"
import {AuthModalForm} from "../modal/AuthModalForm"
import {ProjectModalForm} from "../modal/ProjectModalForm"
import {TaskModalForm} from "../modal/TaskModalForm"

export function MainLayout({children}) {
    return (
        <ThemeProvider
            breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
            minBreakpoint="xxs"
        >
            <Header />
            <Container>
                <Row>
                    <Col className="bg-secondary bg-opacity-25" md={{ span: 2 }}>
                    </Col>
                    <Col>
                        {children}
                    </Col>
                </Row>
            </Container>
            <Footer />
            <AuthModalForm />
            <ProjectModalForm />
            <TaskModalForm />
        </ThemeProvider>
    )
}