import React from 'react'

export default function DisplayProductHome({img, category, title, price, ratingsAverage}) {
  return (
    <div className='card cursor-pointer hover:scale-105 transition-transform duration-300'>
     <div className="mx-10 md:mx-0 overflow-hidden group/parent shadow-md hover:shadow-slate-900  bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
           
           <div>
           <img className="rounded-t-lg w-full block" src={img} alt='ddd' />
           </div>
         
         <div className="p-5 bg-primary">
           <a href="#">
             <h5 className="mb-2 text-xl font-bold tracking-tight text-secondary dark:text-white">{category}</h5>
           </a>
           <p className="mb-3  text-gray-900 font-bold dark:text-gray-400">{title.split(' ').splice(0,2).join(' ')}.</p>
           <div className="flex justify-between items-center mb-5">
             <p>{price} EGP</p>
             <div className="flex justify-between items-center space-x-1">
               <i className="fa-solid fa-star text-yellow-500"></i> 
               <p>{ratingsAverage}</p>
               </div>
           </div>
           <div className="translate-y-[200%] flex space-x-5  items-center group-hover/parent:translate-y-0 duration-300">
             <a href="#" className="w-full px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
               Add
               <i className="fa-solid fa-plus ms-2"></i>
             </a>
             <i className="fa-solid fa-heart fa-2x cursor-pointer"></i>
           </div>
         </div>
       </div>

    </div>
  )
}
