import Head from 'next/head'
import Dashboard from '../components/Dashboard'

export default function Home() {
  return (
    <>
      <Head>
        <title>Clinic System</title>
        <meta name="description" content="GPI Nigeria Clinic Management System" />
        <link rel="icon" href="/gpi-favicon.ico" />
      </Head>
      <Dashboard />
    </>
  )
}
