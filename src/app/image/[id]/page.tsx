import React from 'react'

const ImageDetails = async ({params}:{params: Promise<{id: string}>}) => {
    const {id} = await params
  return (
    <div>Image Details Id -{id} </div>
  )
}

export default ImageDetails