import React from 'react'
import Navbar from "./Navbar"
import Footer from './Footer'
import Head from 'next/head'

function Layout(props) {
  const { children } = props
  return (
    <div className="relative min-h-screen">
      <Head>
        <title>Clinic System</title>
      </Head>
        <Navbar />
          {children}
      <Footer />
    </div >

  )
}

export default Layout