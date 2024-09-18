import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Project from './pages/Project'
import Contact from './pages/Contact'
import Profile from './pages/Profile'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App