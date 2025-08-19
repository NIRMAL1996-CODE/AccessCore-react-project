import React from 'react'

const TaskList = () => {
  return (
    <div>
       <div className='flex flex-row text-black justify-center items-center overflow-x-auto mt-[20px]'>
       <div className='w-[300px] h-[130px] bg-green-300 m-[5px] p-[10px] text-2xl font-semibold rounded-xl'>
          <h1>1</h1>
          <h2>New Task</h2>
        </div>
         <div className='w-[300px] h-[130px] bg-blue-300 m-[5px] p-[10px] text-2xl font-semibold rounded-xl'>
          <h1>3</h1>
          <h2>Completed Task</h2>
        </div>
         <div className='w-[300px] h-[130px] bg-red-300 m-[5px] p-[10px] text-2xl font-semibold rounded-xl'>
          <h1>0</h1>
          <h2>Accepted Task</h2>
        </div>
         <div className='w-[300px] h-[130px] bg-yellow-300 m-[5px] p-[10px] text-2xl font-semibold rounded-xl'>
          <h1>0</h1>
          <h2>Failed Task</h2>
        </div>
       
      </div>
    </div>
  )
}

export default TaskList