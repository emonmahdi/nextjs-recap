import React from 'react'


type DashboardType = {
    children: React.ReactNode,
    team: React.ReactNode,
    analitics: React.ReactNode,
}

const AdminLayout = ({children, team, analitics}: DashboardType) => {
  return (
    <div className='flex  gap-3 p-4 h-screen'>
        <div className='border w-56 p-10'>Sidebar</div>
        <div className='border w-full p-10'>
            <div>{children}</div>
           <div className='flex gap-4'>
           <div className='border p-3'>{team}</div>
           <div className='border p-3'>{analitics}</div>
           </div>
        </div>
    </div>
  )
}

export default AdminLayout