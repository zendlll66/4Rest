import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const HomepageLayout = () => {
    return (
        <div className='min-h-screen  relative flex flex-col'>
            <div className='flex-none'>
                <Navbar />
            </div>
            <main className='flex-1'>
                <Outlet />
            </main>
            <div className='flex-none absolute bottom-0 left-0 right-0'>
                <Footer />
            </div>
        </div>
    )
}

export default HomepageLayout