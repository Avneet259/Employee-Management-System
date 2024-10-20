import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='h-[55%] w-full flex items-center justify-start gap-5 flex-nowrap py-5 mt-10 overflow-x-auto'>
      {data.tasks.map((task, index) => {
        if (task.active) {
          return <AcceptTask key={index}/>
        }
        if (task.newTask) {
          return <NewTask key={index}/>
        }
        if (task.completedTask) {
          return <CompleteTask key={index}/>
        }
        if (task.failedTask) {
          return <FailedTask key={index}/>
        }
      })}
    </div>
  )
}

export default TaskList
