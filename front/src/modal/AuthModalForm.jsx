import * as React from "react"
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import {useContext} from "react"
import {MainContext} from "../context/mainContext"
import {Form} from "react-bootstrap"
import {useTranslation} from "react-i18next"
import {useFormik} from "formik"
import {useDispatch} from "react-redux"
import {authUser} from "../store/authAsyncActions"

export function AuthModalForm() {
    const {showingModalAuth, hideModalAuth} = useContext(MainContext)
    const { t } = useTranslation('forms')
    const dispatch = useDispatch()

    const {values, handleSubmit, handleChange} = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: (values) => {
            dispatch(authUser(values))
                .then(() => hideModalAuth())
        }
    })

    return (
        <Modal
            show={showingModalAuth}
            size="lg" onHide={() => hideModalAuth()}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton />
            <Modal.Body>
                <Form noValidate onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>{t('username')}</Form.Label>
                        <Form.Control
                            type="text" value={values.username}
                            onChange={handleChange} name="username"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>{t('password')}</Form.Label>
                        <Form.Control
                            type="password" value={values.password}
                            onChange={handleChange} name="password"/>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="me-2">
                        {t('login')}
                    </Button>
                    <Button  variant="secondary" onClick={() => hideModalAuth()}>
                        {t('close')}
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}