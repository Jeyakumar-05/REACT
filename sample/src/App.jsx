import React from 'react'
import Navbar from './components/Navbar';

const App = () => {
  const Appname = "JEY";
  return (
    <>
  {/* <div className='flex justify-center items-center p-2 gap-2 bg-slate-400'>
  <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
        Badge
      </span>
</div> */}
    <div className='w-screen h-full flex flex-col items-center justify-center'>
      <Navbar appname ={Appname} />
    </div>
  
    <div className='h-screen w-screen flex justify-center items-center bg-blue-300 ' >
        <div className='w-[30%] h-3/6 flex justify-center items-center bg-white rounded-md shadow-xl'>
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