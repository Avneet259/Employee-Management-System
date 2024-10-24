import React from 'react'

const CompleteTask = ({data}) => {
  return (
   <div className='h-full w-[350px] bg-blue-400 rounded-xl flex-shrink-0 p-5'>
    <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
        <h4 className='text-sm'>{data.date}</h4>
    </div>
    <h2 className='text-2xl font-semibold mt-5'>{data.title}</h2>
    <p className='text-sm mt-2'>{data.description}</p>
    <div className='mt-2'>
      <button className='w-full bg-green-500 py-1 px-2 text-sm'>Complete</button>
    </div>
  </div>
  )
}

export default CompleteTask
