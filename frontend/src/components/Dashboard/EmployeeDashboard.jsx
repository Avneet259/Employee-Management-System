import React from 'react'
import Header from '../../others/Header'
import TaskListNumbers from '../../others/TaskListNumbers'
import TaskList from '../Tasklist/TaskList'

const EmployeeDashboard = ({data}) => {
  return (
    <div className='p-10 h-screen bg-[#1C1C1C]'>
      <Header />
      <TaskListNumbers data={data}/>
      <TaskList data={data}/>
    </div>
  )
}

export default EmployeeDashboard
