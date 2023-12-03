import React from 'react'

// importing files
import Navbar from './Navbar'
import Heros from './Heros'
import What from './What'
import Sidebar from './Sidebar'

import "./style.css"

const Landing_Page = () => {
    return (
        <>
            <Navbar />
            <Sidebar />
            <Heros />
            <What />
        </>
    )
}

export default Landing_Page