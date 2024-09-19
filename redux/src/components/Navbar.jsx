import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../reduxfiles/userSlice'

const Navbar = () => {
  const userdata = useSelector(selectUser)
  return (
    <div>
        {userdata?.name || "not available"}
    </div>
  )
}

export default Navbar