import React from 'react';
import Image from 'next/image';

function Dashboard() {
  return <div className='flex w-full justify-between p-5'>
  <div className='flex flex-col justify-center items center'>
    <h1 className='text-3xl flex flex-col text-[#007560] py-2'>
    <span> GPI </span>
    Clinic Management System</h1>
    <p className='text-xl'>Record Patient information, Vitals and more</p>
    <button className='bg-[#007560] text-white max-w-[10ch] p-2 my-2 rounded-3xl'>Proceed</button>
  </div>
  <Image className="rounded-full" src='/green.jpg' width={400} height={200}/>
  </div>
}

export default Dashboard