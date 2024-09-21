import React from 'react'
import Photo from '../assets/img/IMG_88281.jpg'
import '../assets/css/style.css'

const Profile = () => {
  return (
    <>
    <div className='h-screen pfbg flex items-center fixed'>

      <div className='h-[80%] w-[60%] flex flex-col items-center justify-center'>
        <div className='h-1/5 w-4/6 flex  justify-center items-center'><h1 className='font-medium text-5xl'><span className='pinktext'>Heyy!&nbsp;</span> I'm Jeyakumar S</h1></div>
        <div className='w-[83%] h-[40%] flex justify-end items-center'><h1 className='font-thin navtext text-4xl'>Aspiring Software Engineer with strong problem solving skills, seeking to apply my knowledge in software development and system optimization in a fast-paced, technology-driven environment.</h1></div>
      </div>

      <div className='h-screen w-[40%] flex flex-col justify-center items-center'>
           <img src = {Photo} alt = "profile" className='rounded-full h-[40%] w-[50%]' />
      </div>
    
   </div>
    </>
  )
}

export default Profile
