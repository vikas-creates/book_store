import React, { useEffect, useState } from 'react'
// import list from '../../public/list.json'
import Cards from '../components/Cards'
import {Link} from 'react-router-dom'
import axios from 'axios';

//This is a course component here we write all the things related to the course page.
const Course = () => {
  const [book, setBook]=useState([])
    useEffect(()=>{
      const getBook = async()=>{
          try {
           const res =await axios.get("http://localhost:4001/book")
           console.log(res.data)
           setBook(res.data)
          } catch (error) {
            console.log(error)
          }
      }
      getBook();
 },[] )

  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20px px-4 pt-2'>
        <div className='items-center justify-center text-center'>
          <h1 className='text-2xl mt-28 md:text-4xl'>We are delighted to have you{' '} 
          <span className='text-pink-500'>Here! :)</span>
           </h1>
           <p className='mt-12 '>
           Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
             ever since the 1500s, when an unknown printer took a galley of 
             type and scrambled it to make a type specimen book. It has survived 
             not only five centuries, but also the leap into electronic typesetting,
             remaining essentially unchanged.
           </p>
           <Link to='/'>
           <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>
            Back
            </button>
           </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
          {/* below method we write to display the cards in courses and map the data present in the list file */}
          {
            book.map((item)=>(
            <Cards key={item.id} item={item}/>
            ))
            
          }
        </div>

    </div>
  )
}

export default Course