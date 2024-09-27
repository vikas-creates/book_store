import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Course from '../components/Course'

/*This is courses page file the main motive to create this file
 is like we add all the extra things or reuse the other things and
 link with the main course file here we reuse navbar and footer in the 
 course page and then we export this file to main file for rendring */ 

const Courses = () => {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen '>
    <Course/>
    </div>
    <Footer/>
    </>
  )
}

export default Courses