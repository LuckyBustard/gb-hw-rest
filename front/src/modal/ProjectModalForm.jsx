import * as React from "react"
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import {useContext, useEffect} from "react"
import {MainContext} from "../context/mainContext"
import {Form} from "react-bootstrap"
import {useTranslation} from "react-i18next"
import {useFormik} from "formik"
import {useDispatch, useSelector} from "react-redux"
import {addProject, updateProject, fetchProjects} from "../store/projectAsyncActions"
import { withFormikDevtools } from "formik-devtools-extension"

export function ProjectModalForm() {
    const {showingModalProject, hideModalProject, projectInfo} = useContext(MainContext)
    const { t } = useTranslation(['task', 'forms'])
    const { users } = useSelector((state) => state.user)
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            name: '',
            repositoryLink: '',
            users: [],
            id: null,
        },
        onSubmit: (values) => {
            if (!values.id) {
                dispatch(addProject(values))
                    .then(() => dispatch(fetchProjects()))
                    .then(() => hideModalProject())
            } else {
                const data = {
                    id: values.id,
                    data: values,
                }
                dispatch(updateProject(data))
                    .then(() => dispatch(fetchProjects()))
                    .then(() => hideModalProject())
            }
        }
    })
    withFormikDevtools(formik)

    const {values, handleSubmit, handleChange, setValues} = formik

    useEffect(() => {
        if (projectInfo) {
            setValues(projectInfo)
        }
    }, [projectInfo])

    if (!users) return null

    return (
        <Modal
            show={showingModalProject}
            size="lg" onHide={() => hideModalProject()}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton />
            <Modal.Body>
                <Form noValidate onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicProjectName">
                        <Form.Label>{t('name')}</Form.Label>
                        <Form.Control
                            type="text" value={values.name}
                            onChange={handleChange} name="name"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicRepositoryLink">
                        <Form.Label>{t('repositoryLink')}</Form.Label>
                        <Form.Control
                            type="text" value={values.repositoryLink}
                            onChange={handleChange} name="repositoryLink"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicUsers">
                        <Form.Label>{t('repositoryLink')}</Form.Label>
                        <Form.Select size="sm" value={values.users} onChange={handleChange} name="users" multiple>
                            {
                                Object.values(users).map(
                                    (item) => (<option key={item.id} value={item.id}>{item.username}</option>)
                                )
                            }
                        </Form.Select>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="me-2">
                        {t(values.id ? 'editProject' :'addProject')}
                    </Button>
                    <Button variant="secondary" onClick={() => hideModalProject()}>
                        {t('forms:cancel')}
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}