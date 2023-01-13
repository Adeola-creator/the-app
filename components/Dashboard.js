import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Dashboard() {
  return <div className='flex flex-row w-full justify-between p-5 mt-20'>
  <div className='flex flex-col justify-center md:w-full'>
    <h1 className='text-3xl flex flex-col text-[#007560] py-2'>
    <span className='text-5xl font-bold'> GPI </span>
    Clinic Management System</h1>
    <p className='text-xl'>Record Patient information, vitals, keep Clinic store, document visits  and more</p>
    <Link href='/patients' className='bg-[#007560] text-white cursor-pointer text-center max-w-[15ch] p-2 my-2 rounded-3xl font-bold'>
    Proceed <span className='text-xl font-extrabold'>&rarr;</span> 
    </Link>
  </div>
  <Image alt="Health" className="rounded-full opacity-50" src='/green.jpg' width={400} height={200}/>
  </div>
}

export default Dashboard