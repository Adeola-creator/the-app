import React from 'react'
import  Navbar  from "./Navbar"
import Footer from './Footer'
import Head from 'next/head'

function Layout(props) {
    const {children} = props
  return (
    <>
    <Head>
    <title>Clinic System</title>
    </Head>
    <div className='flex flex-col min-h-screen'>
    <Navbar />
    <hr/>
    <main className='flex flex-col w-full'>
    {children}
    </main>
    <Footer />
</div>
    </>

  )
}

export default Layout