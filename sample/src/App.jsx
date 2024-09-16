import React from 'react'

const App = () => {
  return (
    <>
    <div className='h-screen w-screen flex justify-center items-center bg-blue-300 ' >
        <div className='w-[30%] h-3/6 flex justify-center items-center bg-white rounded-md'>
        <form className='w-[80%] h-[80%] flex flex-col justify-center items-center gap-4' >

        <input type="text" name="" id="" placeholder="Name" className='p-3 rounded-sm bg-[#f8f8f8] w-full font-bold outline-none focus:border-b-2 hover:border-blue-300'/>
        <input type="email" name="" id="" placeholder="Email" className='p-3 rounded-sm bg-[#f8f8f8] w-full font-bold outline-none focus:border-b-2 hover:border-blue-300' />
        <input type="number" name="" id="" placeholder="Age" className='p-3 rounded-sm bg-[#f8f8f8] w-full font-bold outline-none focus:border-b-2 hover:border-blue-300'/>
        <input type="password" name="" id="" placeholder="Password" className='p-3 rounded-sm bg-[#f8f8f8] w-full font-bold outline-none focus:border-b-2 hover:border-blue-300'/>
        <button type="submit" className='w-full p-3  rounded-md outline-none font-bold text-white bg-blue-300 '>Login</button> 

        </form>   
        </div>
    </div>  

    </>
  )
}

export default App