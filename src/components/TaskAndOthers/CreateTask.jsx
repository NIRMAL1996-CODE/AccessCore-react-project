import React from 'react'

const CreateTask = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center text-black bg-pink-200'>
      <form>
        <div className=' flex flex-row justify-between items-center'>
        <h3 className=' font-semibold m-[10px] p-[10px]'>Task Title</h3>
        <input className='text-sm border rounded p-[10px] w-[350px]' type="text" placeholder='Enter Task' />
        </div>
         <div className=' flex flex-row justify-between items-center'>
        <h3 className=' font-semibold m-[10px] p-[10px]'>Date</h3>
        <input className='text-sm border rounded p-[10px] w-[350px]' type="date" />
        </div>
         <div className=' flex flex-row justify-between items-center'>
        <h3 className=' font-semibold m-[10px] p-[10px]'>Assign To</h3>
        <input className='text-sm border rounded p-[10px] w-[350px]' type="text" placeholder='Employee Name' />
        </div>
         <div className=' flex flex-row justify-between items-center'>
        <h3 className=' font-semibold m-[10px] p-[10px]'>Catergory</h3>
        <input className='text-sm border rounded p-[10px] w-[350px]' type="text" placeholder='Development, Design etc.'/>
        </div>
        <div className=' flex flex-col justify-center items-center'>
         <div className=' flex flex-row justify-between items-center'>
        <h3 className=' font-semibold m-[10px] p-[10px]'>Description</h3>
        <textarea className='text-sm border rounded p-[10px] h-[200px] w-[350px]' type="text" placeholder='Detailed Description of Task( Max-500 words)'/>
        </div>
        <button className='bg-yellow-200 text-xl border rounded ml-[150px]  w-[300px] m-[10px] p-[10px]'>Create Task</button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default CreateTask