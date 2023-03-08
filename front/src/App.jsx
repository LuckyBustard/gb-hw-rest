import * as React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import {store} from "./store"
import "./i18n"
import { MainLayout } from "./layouts/MainLayout"
import { Users } from "./pages/Users"
import {Projects} from "./pages/Projects"
import {Tasks} from "./pages/Tasks"

export const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/users" element={
                    <MainLayout>
                        <Users />
                    </MainLayout>
                } />
                <Route path="/tasks" element={
                    <MainLayout>
                        <Tasks />
                    </MainLayout>
                } />
                <Route path="*" element={
                    <MainLayout>
                        <Projects />
                    </MainLayout>
                } />
            </Routes>
        </BrowserRouter>
    </Provider>
)