
const Header = () => {
  return (
    <div>
        <div className=' text-white h-[100px] flex flex-col  rounded m-[10px]'>
      <div className='m-[10px] p-[10px] flex flex-row justify-between items-start'>
        <h1 className='text-3xl font-extrabold'>Hello<br/><span className='text-2xl font-medium'>Nirmal 🙋🏼‍♀️ </span></h1>
        <button className='bg-red-400 text-2xl font-semibold cursor-pointer rounded m-[10px] p-[10px]'>Logout</button>
      </div>
    </div>
    </div>
  )
}

export default Header