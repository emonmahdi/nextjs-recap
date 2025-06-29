import Modal from '@/component/Modal';
import React from 'react'

const InterceptedPage = async ({params}:{params: Promise<{id: string}>}) => {
    const {id} = await params;
  return (
    <Modal id={id} />
  )
}

export default InterceptedPage