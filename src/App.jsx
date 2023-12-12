import React from 'react'

// importing files
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

import { BrowserRouter, Route, Routes } from "react-router-dom"

import Landing_Page from "./sections/pages/Landing_Page"
import AboutPage from './sections/pages/AboutPage'
import ServicePage from './sections/pages/ServicePage'
import TestimonialsPage from './sections/pages/TestimonialsPage'
import ContactPage from './sections/pages/ContactPage'

 // eslint-disable-next-line
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing_Page />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/services' element={<ServicePage />} />
                <Route path='/testimonials' element={<TestimonialsPage />} />
                <Route path='/contact' element={<ContactPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App