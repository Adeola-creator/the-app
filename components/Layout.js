import React from 'react'
import  Navbar  from "./Navbar"
import Footer from './Footer'
import Head from 'next/head'

function Layout(props) {
    const {children} = props
  return (
    <div className='flex flex-col min-h-screen '>
        <Head>
        <title>Clinic System</title>
        </Head>
        <Navbar />
        <hr/>
        <main className=' flex flex-col w-full'>
        {children}
        </main>
        <Footer />
    </div>
  )
}

export default Layout