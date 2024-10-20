import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex justify-between mt-10 gap-5 screen'>
      <div className='bg-red-400 rounded-xl py-6 px-9 w-[45%]'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.newTask}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='bg-green-400 rounded-xl py-6 px-9 w-[45%]'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.completedTask}</h2>
        <h3 className='text-xl font-medium'>Completed Task</h3>
      </div>
      <div className='bg-blue-400 rounded-xl py-6 px-9 w-[45%]'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.active}</h2>
        <h3 className='text-xl font-medium'>Accepted Task</h3>
      </div>
      <div className='bg-sky-400 rounded-xl py-6 px-9 w-[45%]'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.failedTask}</h2>
        <h3 className='text-xl font-medium'>Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers
