import React from 'react'

const Cards = ({item}) => {
    //console.log(item);
  return (
    <>
    <div className='mt-4 my-3 p-3'>
    <div className="card bg-base-100 p-3 w-92 hover:scale-105 transition duration-200 justify-center items-center shadow-xl dark:bg-slate-600 dark:text-white dark:border">
  <figure>
    <img
      src={item.image}
      alt="Book" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="badge badge-outline cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white">Buy now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards