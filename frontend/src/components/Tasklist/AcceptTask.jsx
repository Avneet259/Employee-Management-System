import React from 'react'

const AcceptTask = () => {
  return (
  <div className='h-full w-[350px] bg-red-400 rounded-xl flex-shrink-0 p-5'>
    <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
        <h4 className='text-sm'>25 sept 2024</h4>
    </div>
    <h2 className='text-2xl font-semibold mt-5'>Make a project</h2>
    <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptatibus mollitia dignissimos quod quo qui? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, illum similique totam harum quod optio!</p>
    <div className='flex justify-between mt-4'>
      <button className='bg-green-500 py-1 px-2 text-sm'>Mark as Completed</button>
      <button className='bg-red-600 py-1 px-2 text-sm'>Mark as Failed</button>
    </div>
  </div>
  )
}

export default AcceptTask
