import React from 'react'
import Navbar from '../components/Navbar'
import Photo from '../assets/img/IMG_88281.jpg'
import '../assets/css/style.css'

const Profile = () => {
  return (
    <>
    <div className='h-screen w-screen flex items-center'>
      <div className='h-[80%] w-[60%] flex flex-col items-center justify-center'>
        <div className='h-1/5 w-3/5 flex  justify-center items-center'><h1 className='font-bold text-5xl'>I'm Jeyakumar S</h1></div>
        <div className='w-[80%] h-[40%] flex justify-end items-center'><h1 className='font-semibold text-4xl'>Aspiring Software Engineer with strong problem-solving skills, seeking to apply my knowledge in software development and system optimization in a fast-paced, technology-driven environment.</h1></div>
      </div>
      <div className='h-screen w-[40%] bg-red-300 flex flex-col justify-center items-center'>
           <img src = {Photo} alt = "profile" className='rounded-full h-[40%] w-[50%]' />
      </div>
    
   </div>
    </>
  )
}

export default Profile
