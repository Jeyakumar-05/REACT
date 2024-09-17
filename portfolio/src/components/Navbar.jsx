import React from 'react'

const Navbar = () => {
  return (
    <>
<div className="h-[4rem] w-full flex justify-center items-center rounded-md bg-blue-300 border border-zinc-500">
    <div className="h-full w-[80%] flex flex-row items-center">
        <div className='w-[50%] h-full flex justify-start items-center font-semibold'>Jeyakumar S</div>
        <div className='w-[50%] h-full flex justify-end items-center'>
        <ul className='h-full w-fit list-none flex gap-5 items-center font-semibold'>
                <li>Profile</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
</div>
    </>
  )
}

export default Navbar
