import React from 'react'
import  Navbar  from "./Navbar"
import Footer from './Footer'

function Layout(props) {
    const {children} = props
  return (
    <div className='flex flex-col relative min-h-screen'>
        <Navbar />
        <main className='flex-1 flex flex-col px-5 justify-center items-center'>
        {children}
        </main>
        <Footer />
    </div>
  )
}

export default Layout