import React from 'react'
import Navbar from '../components/Navbar'
import Photo from '../assets/img/IMG_88281.jpg'
import '../assets/css/style.css'

const Profile = () => {
  return (
    <>
    <div className ='h-[50rem] flex justify-end items-center'>
      <div className='flex justify-center items-center'>
      <img src = {Photo} alt = "profile" className='rounded-full h-2/5 w-2/5' />
      </div>
    </div>
    </>
  )
}

export default Profile