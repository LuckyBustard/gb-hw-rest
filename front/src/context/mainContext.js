import * as React from "react"
import {createContext, useEffect, useState} from "react"
import {fetchUsers} from "../store/userAsyncActions"
import {useDispatch} from "react-redux"

export const MainContext = createContext({})

export function MainContextWrapper({ children }) {
    const [showingModalAuth, setShowingModalAuth] = useState(false)
    const toggleModalAuth = () => setShowingModalAuth(val => !val)
    const showModalAuth = () => setShowingModalAuth(true)
    const hideModalAuth = () => setShowingModalAuth(false)

    const [showingModalProject, setShowingModalProject] = useState(false)
    const toggleModalProject = () => setShowingModalProject(val => !val)
    const showModalProject = () => setShowingModalProject(true)
    const hideModalProject = () => setShowingModalProject(false)

    const [showingModalTask, setShowingModalTask] = useState(false)
    const toggleModalTask = () => setShowingModalTask(val => !val)
    const showModalTask = () => setShowingModalTask(true)
    const hideModalTask = () => setShowingModalTask(false)

    const [projectInfo, setProjectInfo] = useState(null)
    const [taskInfo, setTaskInfo] = useState(null)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (
        <MainContext.Provider
            value={{
                showingModalAuth,
                showModalAuth,
                toggleModalAuth,
                hideModalAuth,
                showingModalProject,
                showModalProject,
                toggleModalProject,
                hideModalProject,
                projectInfo,
                setProjectInfo,
                showingModalTask,
                showModalTask,
                toggleModalTask,
                hideModalTask,
                taskInfo,
                setTaskInfo,
            }}
        >
            {children}
        </MainContext.Provider>
    )
}