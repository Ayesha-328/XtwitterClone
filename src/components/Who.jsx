import React from 'react'
import profile from "../profile.png"

const Who = () => {
  return (
    <div className="who bg-[#16181c] rounded-lg">
    <h1 className='text-xl font-bold p-2'>Who to follow</h1>

    <div className="item flex justify-between items-center my-3 p-2 hover:bg-gray-800 cursor-pointer ">
      <div className='flex gap-2 items-center'>
      <img className='w-8 h-8 rounded' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCelkmWfnQkGmyWNujbuC9mF04Ww5rGRN1vA&s" alt="" />
      <div>
        <div className="font-bold">React</div>
        <div className="text-gray-600 text-xs">@react</div>
      </div>

      </div>
      <button className='bg-white text-black rounded-full h-7 px-2 xl:px-4 text-sm font-semibold'>Follow</button>

    </div>
    <div className="item flex justify-between items-center my-3 p-2 hover:bg-gray-800 cursor-pointer ">
      <div className='flex gap-2 items-center'>
      <img className='w-8 h-8 rounded' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_j1tuEv8rY8WnY7LKrmaM-DmuLyHh0c3xfw&s" alt="" />
      <div>
        <div className="font-bold">Memes</div>
        <div className="text-gray-600 text-xs">@memes</div>
      </div>

      </div>
      <button className='bg-white text-black rounded-full h-7 px-2 xl:px-4 text-sm font-semibold '>Follow</button>

    </div>
    <div className="item flex justify-between items-center my-3 p-2 hover:bg-gray-800 cursor-pointer ">
      <div className='flex gap-2 items-center'>
      <img className='w-8 h-8 rounded' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmPkdW5cPPVCvynyBZXgACtEmi0vH7sEjPYg&s" alt="" />
      <div>
        <div className="font-bold">MoTaz</div>
        <div className="text-gray-600 text-xs">@motazazaiza9</div>
      </div>

      </div>
      <button className='bg-white text-black rounded-full h-7 px-2 xl:px-4 text-sm font-semibold '>Follow</button>

    </div>
   
   

    <div className="text-blue-500 text-sm cursor-pointer hover:underline p-2">Show More</div>
  </div>
  )
}

export default Who