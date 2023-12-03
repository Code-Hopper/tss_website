import React from 'react'

// importing files
import Navbar from './Navbar'
import Heros from './Heros'
import What from './What'
import Sidebar from './Sidebar'

import "./style.css"
import Testimonials from './Testimonials'

const Landing_Page = () => {
    return (
        <>
            <Navbar />
            <Sidebar />
            <Heros />
            <What />
            <Testimonials />
        </>
    )
}

export default Landing_Page