import React from 'react'

const Whats = () => {
  return (
    <div className="whats bg-[#16181c] rounded-lg">
    <h1 className='text-xl font-bold p-2'>Whats Happening</h1>
    <div className="item my-1 p-2 hover:bg-gray-800 cursor-pointer ">
      <div className="font-bold text-sm text-gray-600 ">Trending in Pakistan</div>
      <div className="font-bold">#MondayMotivation</div>
      <div className="text-gray-600 text-xs">40.2k Posts</div>

    </div>
    <div className="item my-1 p-2 hover:bg-gray-800 cursor-pointer ">
      <div className="font-bold text-sm text-gray-600 ">Trending in Pakistan</div>
      <div className="font-bold">#FreePalestine</div>
      <div className="text-gray-600 text-xs">89.7k Posts</div>

    </div>
    <div className="item my-1 p-2 hover:bg-gray-800 cursor-pointer ">
      <div className="font-bold text-sm text-gray-600 ">Trending in Pakistan</div>
      <div className="font-bold">#StudentLife</div>
      <div className="text-gray-600 text-xs">456.8k Posts</div>

    </div>
    <div className="text-blue-500 text-sm cursor-pointer hover:underline p-2">Show More</div>

  </div>
  )
}

export default Whats