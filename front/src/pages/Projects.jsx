import * as React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useCallback, useContext, useEffect, useState} from "react";
import {fetchProjects,deleteProject} from "../store/projectAsyncActions";
import {BaseTable} from "../components/common/BaseTable"
import {useTranslation} from "react-i18next"
import Button from "react-bootstrap/Button"
import {MainContext} from "../context/mainContext"
import {Form} from "react-bootstrap"
import {debounce} from "lodash"

export function Projects() {
    const dispatch = useDispatch()
    const { projects } = useSelector((state) => state.project)
    const { token } = useSelector((state) => state.auth)
    const { t } = useTranslation('project')
    const {showModalProject, setProjectInfo} = useContext(MainContext)
    const [searchText, setSearchText] = useState('')

    useEffect(() => {
        dispatch(fetchProjects())
    }, [])

    if (!projects) {
        return (
            <div className="page-content mt-2">
                Loading...
            </div>
        )
    }

    const editForm = useCallback(() => {
        if (token) {
            return (info) => {
                setProjectInfo(info)
                showModalProject()
            }
        }
        return null
    }, [token])

    const deleteItem = useCallback(() => {
        if (token) {
            return (id) => {
                dispatch(deleteProject(id)).then(() => dispatch(fetchProjects()))
            }
            return null
        }
    }, [token])

    const searchProject = useCallback(debounce((name) => {
            console.log(name)
            dispatch(fetchProjects({ name }))
        }, 1000), [])

    useEffect(() => {
        console.log(searchText, searchText.length)
        if (searchText.length > 0) {
            searchProject(searchText)
        }
    }, [searchText])

    return (
        <div className="page-content mt-2">
            <Form.Group className="mb-3" controlId="formBasicUsers">
                <Form.Control type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} name="name"/>
            </Form.Group>
            {token && <Button onClick={() => showModalProject()}>{t('addProject')}</Button>}
            <BaseTable
                headers={['id', 'name', 'repositoryLink']}
                editForm={editForm()} deleteItem={deleteItem()}
                items={projects} transNS="project" bodyKey="id"
            />
        </div>
    )
}