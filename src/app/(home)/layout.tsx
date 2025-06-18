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
        <nav className='bg-purple-800 px-12 text-white py-6 flex justify-between items-center'>
            <div className="logo">
            <a href="#">Logo</a>
            </div>
            <div className="menu">
                <ul className='flex gap-4 items-center'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
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