import { Metadata } from 'next'
import React from 'react'

export const metadata:Metadata={
    title:{
      default:'Mobile House',
      template:'%s | My Company Here',
      absolute:""  
    },
    description:'this is about page for next.js app'
  }

const HomeLayout = ({children}:{children: React.ReactNode}) => {
  return (
    <div>
        <div className='px-16 py-12'>
          <h3>Home layout</h3>
        </div>
        <div className='py-16 px-8'>
            {children}
        </div>
        <footer className='bg-gray-800 py-2 text-center text-white'>
            <p>This is Footer</p>
        </footer>
    </div>
  )
}

export default HomeLayout