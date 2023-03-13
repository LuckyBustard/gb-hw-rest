import * as React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchTasks} from "../store/taskAsyncActions";
import {BaseTable} from "../components/common/BaseTable"

export function Tasks()
{
    const dispatch = useDispatch()
    const { tasks } = useSelector((state) => state.task)

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

    return (
        <div className="page-content mt-2">
            <BaseTable headers={['id', 'text', 'createdAt', 'updatedAt']}
                       items={tasks} transNS="task"  bodyKey="id" />
        </div>
    )
}