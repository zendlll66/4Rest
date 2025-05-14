import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const HomepageLayout = () => {
    return (
        <div className='min-h-screen flex flex-col'>
            <div className='flex-none'>
                <Navbar />
            </div>
            <main className='flex-1 relative'>
                <Outlet />
            </main>
            <div className='flex-none'>
                <Footer />
            </div>
        </div>
    )
}

export default HomepageLayout