import * as React from "react"
import {createContext, useState} from "react"

export const MainContext = createContext({})

export function MainContextWrapper({ children }) {
    const [showingModalAuth, setShowingModalAuth] = useState(false)
    const toggleModalAuth = () => setShowingModalAuth(val => !val)
    const showModalAuth = () => setShowingModalAuth(true)
    const hideModalAuth = () => setShowingModalAuth(false)

    return (
        <MainContext.Provider
            value={{
                showingModalAuth,
                showModalAuth,
                toggleModalAuth,
                hideModalAuth,
            }}
        >
            {children}
        </MainContext.Provider>
    )
}