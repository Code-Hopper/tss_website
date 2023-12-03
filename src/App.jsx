import React from 'react'

// importing files
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

import { BrowserRouter, Route, Routes } from "react-router-dom"

import Landing_Page from "./sections/Landing_Page"
 // eslint-disable-next-line
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing_Page />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App