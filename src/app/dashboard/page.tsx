import { redirect } from 'next/navigation';
import React from 'react'

const Dashboard = () => {
  const isUser = true;

  if(!isUser){
    redirect('/login')
  }

  return (
    <div> Welcome to Dashboard</div>
  )
}

export default Dashboard