import * as React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchProjects} from "../store/projectAsyncActions";
import {BaseTable} from "../components/common/BaseTable"

export function Projects()
{
    const dispatch = useDispatch()
    const { projects } = useSelector((state) => state.project)

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

    return (
        <div className="page-content mt-2">
            <BaseTable headers={['id', 'name', 'repositoryLink']} items={projects} transNS="project" />
        </div>
    )
}