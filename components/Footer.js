import React from 'react'

function Footer() {
    const thisYear = new Date().getFullYear()
  return (
    <footer className='mt-auto text-center py-5 bg-gray-100 w-full text-gray-400 text-sm'>
     <p>
     &#64;
     Graphic Packaging International Nigeria {thisYear}
     </p>
    </footer>
  )
}

export default Footer