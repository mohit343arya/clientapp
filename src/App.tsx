import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppRoutes from './AppRoutes'
import './assets/sass/app.scss'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {AppRoutes.map((route, index) => {
                    const { element, ...rest } = route
                    return <Route key={index} {...rest} element={element} />
                })}
            </Routes>
        </BrowserRouter>
    )
}

export default App
