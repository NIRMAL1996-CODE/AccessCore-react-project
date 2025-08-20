import React from 'react'

const CreateTask = () => {
  return (
    <div>
      <div>
      <form>
        <div className='flex flex-row justify-between rounded items-center m-[10px] p-[10px] text-black bg-gray-200'>
        <div className='flex flex-col justify-center items-center '>
        <div className=' flex flex-col justify-between '>
        <h3 className=' font-medium  p-[10px]'>Task Title</h3>
        <input className='cursor-pointer text-sm border rounded p-[10px] w-[500px]' type="text" placeholder='Enter Task' />
        </div>
         <div className=' flex flex-col justify-between'>
        <h3 className=' font-medium  p-[10px]'>Date</h3>
        <input className='cursor-pointer text-sm border rounded p-[10px] w-[500px]' type="date" />
        </div>
         <div className=' flex flex-col justify-between'>
        <h3 className=' font-medium p-[10px]'>Assign To</h3>
        <input className='cursor-pointer text-sm border rounded p-[10px] w-[500px]' type="text" placeholder='Employee Name' />
        </div>
         <div className=' flex flex-col justify-between'>
        <h3 className=' font-medium  p-[10px]'>Catergory</h3>
        <input className='cursor-pointer text-sm border rounded p-[10px] w-[500px]' type="text" placeholder='Development, Design etc.'/>
        </div></div>
        <div className=' flex flex-col justify-center items-center'>
         <div className=' flex flex-col justify-between'>
        <h3 className=' font-medium  p-[10px]'>Description</h3>
        <textarea className='cursor-pointer text-sm border rounded p-[10px] h-[200px] w-[550px]' type="text" placeholder='Detailed Description of Task( Max-500 words)'/>
        </div>
        <button className='bg-yellow-200 text-xl cursor-pointer font-semibold border rounded   w-[550px] m-[10px] p-[10px]'>Create Task</button>
        </div>
        </div>
      </form>
    </div>
    </div>
  )
}

export default CreateTask