import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const AllTasks = () => {

  const authData = useContext(AuthContext)

  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded'>
      <div className='bg-emerald-400 mb-2 py-2 px-4 flex justify-between rounded'>
        <h2 className='w-1/5 text-lg font-medium'>Employee Name</h2>
        <h5 className='w-1/5 text-lg font-medium'>New Task</h5>
        <h5 className='w-1/5 text-lg font-medium'>Completed Task</h5>
        <h5 className='w-1/5 text-lg font-medium'>Accepted Task</h5>
        <h5 className='w-1/5 text-lg font-medium'>Failed Task</h5>
      </div>
      <div>
      {authData.employees.map((employee, index) => {
        return <div key={index} className='flex justify-between rounded mb-2 border-2 border-emerald-400 py-2 px-4 '>
        <h2 className='w-1/5 text-lg font-medium'>{employee.firstname}</h2>
        <h5 className='w-1/5 text-lg font-medium'>{employee.taskCount.newTask}</h5>
        <h5 className='w-1/5 text-lg font-medium'>{employee.taskCount.completedTask}</h5>
        <h5 className='w-1/5 text-lg font-medium'>{employee.taskCount.active}</h5>
        <h5 className='w-1/5 text-lg font-medium'>{employee.taskCount.failedTask}</h5>
      </div>
      })}
      </div>
    </div>
  )
}

export default AllTasks
