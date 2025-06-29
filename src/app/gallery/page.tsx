import Link from 'next/link'
import React from 'react'

const Gallery = () => {
  return (
    <div>
        <h2>Gallery Page</h2>
        <Link href='/image/123' className='border p-2 my-2 text-sm'>Go to Photo</Link>  
    </div>
  )
}

export default Gallery