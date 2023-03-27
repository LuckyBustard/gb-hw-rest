import * as React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useCallback, useContext, useEffect} from "react";
import {fetchTasks, deleteTask} from "../store/taskAsyncActions";
import {BaseTable} from "../components/common/BaseTable"
import {useTranslation} from "react-i18next"
import {MainContext} from "../context/mainContext"
import Button from "react-bootstrap/Button"
import {fetchProjects} from "../store/projectAsyncActions"

export function Tasks() {
    const dispatch = useDispatch()
    const {tasks} = useSelector((state) => state.task)
    const {token} = useSelector((state) => state.auth)
    const {t} = useTranslation('task')
    const {showModalTask, setTaskInfo} = useContext(MainContext)

    useEffect(() => {
        dispatch(fetchTasks())
    }, [])

    if (!tasks) {
        return (
            <div className="page-content mt-2">
                Loading...
            </div>
        )
    }

    const editForm = useCallback(() => {
        if (token) {
            return (info) => {
                console.log(info)
                setTaskInfo(info)
                showModalTask()
            }
        }
        return null
    }, [token])

    const deleteItem = useCallback(() => {
        if (token) {
            return (id) => {
                dispatch(deleteTask(id)).then(() => dispatch(fetchProjects()))
            }
            return null
        }
    }, [token])

    return (
        <div className="page-content mt-2">
            {token && <Button onClick={() => showModalTask()}>{t('addTask')}</Button>}
            <BaseTable
                headers={['id', 'text', 'createdAt', 'updatedAt']}
                editForm={editForm()} deleteItem={deleteItem()}
                items={tasks} transNS="task" bodyKey="id"/>
        </div>
    )
}