import React from 'react'
import { CircleUser } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  
  const navdata = [{
     title:"Profile",
     path:"/profile"
    },
    {
     title:"Project",
     path:"/projects"
    },
    {
     title:"Contact",
     path:"/contact"
    }]

  return (
    <>
<div className="h-[4rem] w-full flex justify-center items-center rounded-md bg-blue-200 border border-zinc-500">
    <div className="h-full w-[90%] flex flex-row items-center">
        <div className='w-[50%] h-full flex justify-start items-center font-semibold text-xl'><h2>JEYAKUMAR S</h2></div>
        <div className='w-[70%] h-full flex justify-end items-center'>
            <ul className='h-full w-fit list-none flex  items-center font-semibold gap-16'>
               {navdata.map((data, index) => (
                <NavLink  key={index} to={data.path}><li className='text-xl font-semibold '>{data.title}</li></NavLink> ))}
                
                {/* <li className='text-xl font-semibold px-3'>Profile</li>
                <li className='text-xl font-semibold px-3'>Projects</li>
                <li className='text-xl font-semibold px-3'>Contact</li> */}
           <li className='w-[30%] h-full flex justify-end items-center gap-3'><CircleUser size={35}/> </li>
            </ul>
        </div>
    </div>
</div>
    </>
  )
}
export default Navbar
    
    // <div className='bg-slate-300 rounded-sm h-[4rem] w-full shadow-xl bg-opacity-60 flex justify-around items-center sticky'>
    //       <div className='h-full w-[95%] flex justify-center items-center'>
    //         <div className='flex h-full w-full justify-start items-center '><h1 className='font-bold'><Link to='/home'>HANS ROHIT Y</Link></h1></div>
    //        <div className='flex justify-end items-center h-full w-[50%]'>
    //         <ul className='h-full w-full list-none flex flex-row justify-center gap-1 items-center font-semibold'>
    //         {navdata.map((data,index)=>(
    //           <Link key={index} to={data.path} className='h-[100%] w-[40%]'><li className='border-1  justify-center flex items-center h-full w-full hover:bg-slate-800 hover:bg-opacity-30 hover:text-white'>{data.title}</li></Link>
    //         ))}
    //             {/* <li className='border-1 justify-center flex items-center h-[100%] w-[40%] hover:bg-slate-800 hover:text-white hover:bg-opacity-30'><Link to='/project'>Project</Link></li>
    //             <li className='border-1 justify-center flex items-center h-[100%] w-[40%] hover:bg-slate-800 hover:text-white hover:bg-opacity-30'><Link to='/contact'>Contact</Link></li> */}
    //         <div className=' h-[100%] w-[18%] border-1 justify-center items-center flex'>
    //             <Link to='/home'><li className='border-2 border-black rounded-full h-[32px] w-[32px] flex justify-start items-center'><CircleUser size={32} /></li></Link>
    //             </div>
    //         </ul>
    //         </div>
    //    </div> 
    //  </div>
