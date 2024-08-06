import React from 'react'
import profile from "../profile.png"

const WritePost = () => {
  return (
    <div className="whatshappening flex space-x-3 border-b-[1px] border-y-gray-600/50 p-2">
    <img src={profile} className='w-9 h-9 lg:w-12 lg:h-12 rounded-full' alt="" />
    <div className="flex flex-col w-full space-y-4">
      {/* <input className='w-full bg-black  focus:outline-none text-2xl text-gray-400' type="text" name="" id="" placeholder='What is happening?!' /> */}
      <textarea className='w-full bg-black  focus:outline-none text-2xl resize-none text-gray-400' id="" placeholder='What is Happening?!'></textarea>
      <div className="flex items-start cursor-pointer text-blue-400 text-sm"><span className="text-[20px] pr-2 material-symbols-outlined">
        public
      </span>Everyone can reply</div>

      <div className="options flex justify-between items-center py-3 border-t-[1px] border-y-gray-600/50 ">
        <ul className="icons flex space-x-3 text-blue-400 text-lg">
          <li className='cursor-pointer flex items-center gap-1'><span class="text-[14px] md:text-[20px] material-symbols-outlined">
            photo
          </span></li>
          <li className='cursor-pointer flex items-center gap-1'><span class="text-[14px] md:text-[20px] material-symbols-outlined">
            gif_box
          </span></li>
          <li className='cursor-pointer flex items-center gap-1'><span class="text-[14px] md:text-[20px] material-symbols-outlined">
            format_list_bulleted
          </span></li>
          <li className='cursor-pointer flex items-center gap-1'><span class="text-[14px] md:text-[20px] material-symbols-outlined">
            sentiment_satisfied
          </span></li>
          <li className='cursor-pointer flex items-center gap-1'><span class="text-[14px] md:text-[20px] material-symbols-outlined">
            calendar_clock
          </span></li>
          <li className='cursor-pointer text-slate-500'><span class="text-[14px] md:text-[20px] material-symbols-outlined">
            location_on
          </span></li>
        </ul>
        <button className='bg-[#1d9bf0]/50 rounded-full px-4 py-1 md:px-7 md:py-2 hover:bg-[#1d9bf0] ease-in-out duration-500'>Post</button>
      </div>

    </div>




  </div>
  )
}

export default WritePost