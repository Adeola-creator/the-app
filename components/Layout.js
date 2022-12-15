import React from 'react'
import  Navbar  from "./Navbar"
import Footer from './Footer'
import Head from 'next/head'

function Layout(props) {
    const {children} = props
  return (
    <div className='flex flex-col flex-1 relative min-h-screen'>
        <Head>
        <title>Clinic System</title>
        </Head>
        <Navbar />
        <main className='flex-1 flex flex-col '>
        {children}
        </main>
        <Footer />
    </div>
  )
}

export default Layout