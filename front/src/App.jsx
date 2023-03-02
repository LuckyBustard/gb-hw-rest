import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { MainLayout } from "./layouts/MainLayout"
import { Index } from "./pages/Index"
import {store} from "./store"

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="*" element={
                    <MainLayout>
                        <Index />
                    </MainLayout>
                } />
            </Routes>
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(<App />, document.getElementById("app"))