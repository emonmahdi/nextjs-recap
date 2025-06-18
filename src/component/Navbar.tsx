import Link from 'next/link'
import React from 'react'


const navItems = [
    {title: 'Home', href:'/'},
    {title: 'About', href:'/about'},
    {title: 'Blog', href:'/blog'},
    {title: 'Contact', href:'/contact'},
]

const Navbar = () => {
  return (
    <div className='flex justify-between max-w-7xl mx-auto'>
        <div> 
            <Link href='/'>Logo</Link>
        </div>
        <div>
            <ul>
                {
                    navItems.map((item) => <Link key={item.href} href={item.href}>{item.title}</Link>)
                }
            </ul>
        </div>
    </div>
  )
}

export default Navbar