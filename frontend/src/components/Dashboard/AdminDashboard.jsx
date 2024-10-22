import React from 'react'
import Header from '../../others/Header'
import CreateTask from '../../others/CreateTask'
import AllTasks from '../../others/AllTasks'

const AdminDashboard = ({setUser}) => {
  return (
    <div className='h-screen w-full p-7'>
      <Header setUser={setUser}/>
      <CreateTask />
      <AllTasks />
    </div>
  )
}

export default AdminDashboard
