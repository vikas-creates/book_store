import React from 'react'
import Home from './home/home'
import Course from './components/Course'
import { Navigate, Route, Routes } from 'react-router-dom'
import Courses from './courses/Courses'
import Signup from './components/Signup'
import {Toaster} from 'react-hot-Toast';
import { useAuth } from './context/AuthProvider'
import Contacts from './contact/Contacts'
const App = () => {

  const [authUser, setAuthUser]=useAuth()
  console.log(authUser);

  return (
  <>
  {/* {<Home/>
  <Course/>} */}
  <div className='dark:bg-slate-900 dark:text-white'>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/course'
     element={authUser? <Courses/> : <Navigate to = "/signup" />}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/contact' element={<Contacts/>}/>
  </Routes>
  <Toaster />

  </div>
  </>
  )
}

export default App