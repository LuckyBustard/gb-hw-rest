import * as React from "react"
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import {useContext, useEffect} from "react"
import {MainContext} from "../context/mainContext"
import {Form} from "react-bootstrap"
import {useTranslation} from "react-i18next"
import {useFormik} from "formik"
import {useDispatch, useSelector} from "react-redux"
import {addTask, fetchTasks, updateTask} from "../store/taskAsyncActions"
import {fetchProjects} from "../store/projectAsyncActions"
import { withFormikDevtools } from "formik-devtools-extension"

export function TaskModalForm() {
    const {showingModalTask, hideModalTask, taskInfo} = useContext(MainContext)
    const { t } = useTranslation(['task', 'forms'])
    const { projects } = useSelector((state) => state.project)
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            text: '',
            project: null,
            id: null,
        },
        onSubmit: (values) => {
            if (!values.id) {
                dispatch(addTask(values))
                    .then(() => dispatch(fetchTasks()))
                    .then(() => hideModalTask())
            } else {
                const data = {
                    id: values.id,
                    data: values,
                }
                dispatch(updateTask(data))
                    .then(() => dispatch(fetchTasks()))
                    .then(() => hideModalTask())
            }
        }
    })
    withFormikDevtools(formik)

    const {values, handleSubmit, handleChange, setValues, setFieldValue} = formik

    useEffect(() => {
        if (taskInfo) {
            setValues(taskInfo)
        }
    }, [taskInfo])

    useEffect(() => {
        dispatch(fetchProjects())
    }, [])

    useEffect(() => {
        if (projects && !values.project) {
            const projectArr = Object.values(projects)
            if (projectArr.length > 0) {
                setFieldValue('project', projectArr.shift().id)
            }
        }
    }, [projects])

    if (!projects) return null

    return (
        <Modal
            show={showingModalTask}
            size="lg" onHide={() => hideModalTask()}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton />
            <Modal.Body>
                <Form noValidate onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicTaskName">
                        <Form.Label>{t('text')}</Form.Label>
                        <Form.Control
                            type="text" value={values.text}
                            onChange={handleChange} name="text"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicUsers">
                        <Form.Label>{t('project')}</Form.Label>
                        <Form.Select size="sm" value={values.project} onChange={handleChange} name="project">
                            {
                                Object.values(projects).map(
                                    (item) => (<option key={item.id} value={item.id}>{item.name}</option>)
                                )
                            }
                        </Form.Select>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="me-2">
                        {t(values.id ? 'editTask' : 'addTask')}
                    </Button>
                    <Button variant="secondary" onClick={() => hideModalTask()}>
                        {t('forms:cancel')}
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}