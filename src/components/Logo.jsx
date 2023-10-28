import React from 'react'
// import logo from "../img/img .png"
import logo from "../img/logo.avif"

function Logo() {
  return (
    <div className='flex items-center gap-2'>
      <img src={logo} alt="" className='md:w-[35px]  md:h-[35px] w-[25px] h-[25px] object-contain rounded-[50%] ' /><p className='font-semibold italic md:text-2xl text-lg text-blue-900'>Blog Spot.</p>
    </div>
  )
}

export default Logo