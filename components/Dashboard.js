import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Dashboard() {
  return <main className='flex flex-col-reverse gap-4 w-full items-center justify-centermd:gap-0  md:flex-row md:justify-around p-5 '>
  <div className='flex flex-col justify-center md:w-full'>
    <h1 className='text-3xl flex flex-col text-[#007560] py-2'>
    <span className='text-5xl font-bold my-2'> GPI </span>
    Clinic Management System</h1>
    <p className='text-xl'>Record Patient information, vitals, keep Clinic store, document visits  and more</p>
    <Link href='/patients' className='bg-[#007560] text-white text-center max-w-[15ch] p-2 my-5 rounded-3xl font-bold'>
    Proceed <span className='text-xl font-extrabold'>&rarr;</span> 
    </Link>
  </div>
  <Image alt="Health" className="rounded-full w-1/2  sm:w-1/3 sm:h-1/4  opacity-50" src='/green.jpg' width={400} height={150}/>
  </main>
}

export default Dashboard