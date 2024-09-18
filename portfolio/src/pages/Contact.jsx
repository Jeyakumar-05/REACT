import React, { useState } from 'react'
import Navbar from '../components/Navbar'

const Contact = () => {
  const [visible,setvisible] =useState(false)
  return (
    <>
    {
      visible &&(
        <>
    <div className="h-screen w-screen absolute top-0 left-0 bg-black/20 flex justify-center items-center z-50">
    <div className="h-[40%] w-[30%] bg-red z-50 flex flex-col bg-white">
      <div className="w-full h-[20%] flex flex-row justify-center items-center border-2">
        Delete?
      </div>
    <div className="w-full h-[60%] flex flex-row justify-center items-center">
      Are you sure?
    </div>
    <div className="w-full h-[20%] flex justify-center items-center">
    <button onClick={()=> setvisible(!visible)} className="bg-red-500 p-3 text-white w-1/2 h-full rounded-sm">No</button>
    <button onClick={()=> setvisible(!visible)} className="bg-green-500 p-3 text-white w-1/2 h-full rounded-sm">Yes</button>
    </div>
    </div>
    </div>
    </>
  )
}
<div className="w-full h-[20%] flex flex-row justify-center items-center -z-10">
<button onClick={()=> setvisible(true)} className="bg-red-500 p-3 text-white w-1/2 h-full rounded-sm">Delete</button>
</div>
</>
  )
}
export default Contact