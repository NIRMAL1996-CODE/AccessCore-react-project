import React from 'react'
import { FaLock } from 'react-icons/fa';

const Login = () => {

  const handleSubmit=(event)=>{
    event.preventDefault();
  }
  return (
    <>
      <div className='flex justify-center items-center'>
        <div className=' bg-purple-200 h-[600px] w-[400px] m-[20px] rounded-2xl flex flex-col justify-center items-center'>
           <h1 className='font-semibold'>Login</h1>
        <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center'>

          <input required className='flex flex-col border-white border-2 m-[10px] p-[10px] bg-transparent outline-none rounded-xl w-[350px] cursor-pointer' type="email" placeholder='Enter Your Email' />

          <input required className='flex flex-col border-white border-2 m-[10px] p-[10px] bg-transparent outline-none rounded-xl w-[350px] cursor-pointer ' type="password" placeholder='Enter Password' />

          <div className='flex flex-row gap-20 justify-center items-center'>
          <div className='flex flex-row'>
          <input className='cursor-pointer m-[5px] p-[5px]' type="checkbox"/>
          <p>Remember Me</p>
          </div>
          <div>
          <button className='text-red-600 cursor-pointer'>Forget Password</button>
          </div>
          </div>
          <button className='text-2xl font-semibold text-black bg-white hover:bg-yellow-200 transition-colors duration-300 m-2 py-2 px-6 rounded-xl shadow-lg w-[150px] cursor-pointer'>
  Login
</button>

        </form>
      </div>
      </div>
    </>
  )
}

export default Login