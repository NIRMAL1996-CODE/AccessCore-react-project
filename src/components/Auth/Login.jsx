import React, { useState } from 'react';

const Login = () => {
const [email, setEmail] = useState("");
const [password, setPassword] =useState("");

const handlechange = (e) => {
  const { name, value } = e.target;
  if (name === "email") setEmail(value);
  else if (name === "password") setPassword(value);
}

const handleSubmit=(event)=>{
  event.preventDefault();
  console.log(email);
  console.log(password);
  console.log("submitted and working perfectly")
  setEmail("");
  setPassword("");
}

  return (
    <>
      <div className='flex justify-center items-center'>
        <div className=' bg-purple-200 h-[600px] w-[400px] m-[20px] rounded-2xl flex flex-col justify-center items-center'>
        <h1 className='font-semibold'>Login</h1>
        <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center'>

          <input name='email'
           autoComplete='off'
           onChange={handlechange}
           value={email}
           required
           className='flex flex-col border-white border-2 m-[10px] p-[10px] bg-transparent outline-none rounded-xl w-[350px] cursor-pointer' 
           type="email" 
           placeholder='Enter Your Email' />

          <input name='password'
           autoComplete='off'
           onChange={handlechange}
           value={password}
           required
           className='flex flex-col border-white border-2 m-[10px] p-[10px] bg-transparent outline-none rounded-xl w-[350px] cursor-pointer ' 
           type="password" 
           placeholder='Enter Password' />

          <div className='flex flex-row gap-20 justify-center items-center'>
            <div className='flex flex-row'>
            <input className='cursor-pointer m-[5px] p-[5px]' type="checkbox"/>
            <p>Remember Me</p>
            </div>
            <div>
            <button className='text-red-600 cursor-pointer'>Forget Password</button>
            </div>
          </div>
          <button type='submit' className='text-2xl font-semibold text-black bg-white hover:bg-yellow-200     transition-colors duration-300 m-2 py-2 px-6 rounded-xl shadow-lg w-[150px] cursor-pointer'>Login
          </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login