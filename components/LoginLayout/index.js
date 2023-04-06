import React from 'react'
import { RxMagicWand } from 'react-icons/rx'

export const LoginLayout = ({children}) => {
  return (
    <div className='h-screen w-full grid '>
    <div className='place-self-center w-3/5 lg:flex bg-gradient-to-r from-blue-500 to-blue-700  border shadow-lg rounded-md h-5/6 h-auto relative'>
      <div className='w-full lg:w-1/2 h-full '>
        <div className='grid'>
          <div className='place-self-center'>
            <RxMagicWand size="50" color='white' />
          </div>
        </div>
      </div>
      <div className='hidden lg:w-1/2 h-auto  bg-white lg:flex justify-center'>
        <div className='w-3/4  '>
            {children}
            </div>
            </div>

            {/* small screens */}
           
            <div className='lg:hidden lg:w-1/2 h-auto absolute bg-white inset-8 z-30 flex justify-center'>
        <div className='w-4/5  '>
            {children}
            </div>
            </div>
            </div>
    </div>
  )
}


