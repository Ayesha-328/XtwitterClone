import React from 'react'
import profile from "../profile.png"
import verifiedIcon from "../verified-icon.png"

const Post = (props) => {
  return (
    <div className="post flex space-x-1 md:space-x-3 border-b-[1px] border-y-gray-600/50 p-2">
    <img src={props.profileImg} className='w-7 h-7 lg:w-12 lg:h-12 rounded-full' alt="" />
    <div className="flex flex-col w-full md:space-y-2 md:pt-1">
      <div className="flex  items-center justify-between">
        <div className='flex flex-col xl:flex-row xl:items-center md:gap-1'>
          <div className='flex items-center gap-1'>
          <h2 className='text-xs md:text-base font-bold hover:underline hover:cursor-pointer'>{props.profileName}</h2>
          <img className='w-5 h-5' src={verifiedIcon} alt="" />
          </div>
          <span className='text-xs lg:text-sm text-gray-500'>@{props.profileUsername} . {props.time}</span>
        </div>
        <div className='flex items-center gap-1'>
          <button className='cursor-pointer bg-white text-black px-2 md:px-5 py-1 text-xs md:text-base font-semibold rounded-full'>Subscribe</button>
          <span className="text-gray-500 cursor-pointer material-symbols-outlined">
            more_horiz
          </span>

        </div>

      </div>

      <div className="post-content py-2">
        {props.postContent&& props.postContent}
        {props.postImg&&<img src={props.postImg} alt="" className='w-full max-h-[500px] rounded-lg my-2' />}
      </div>



      <div className="options flex  items-center py-3 border-t-[1px] border-y-gray-600/50 ">
        <ul className="icons flex w-full justify-between space-x-3 text-gray-500 text-sm ">
          <li className='cursor-pointer flex items-center gap-1 hover:text-blue-400'><span class="text-[14px] md:text-[20px] material-symbols-outlined">
            quick_phrases
          </span>90</li>
          <li className='cursor-pointer flex items-center gap-1 hover:text-green-500'><span class="text-[14px] md:text-[20px] material-symbols-outlined">
            share
          </span>4.2K</li>
          <li className='cursor-pointer flex items-center gap-1 hover:text-pink-500'><span class="text-[14px] md:text-[20px] material-symbols-outlined">
            favorite
          </span>105.5K</li>
          <li className='cursor-pointer flex items-center gap-1 hover:text-blue-400'><span class="text-[14px] md:text-[20px] material-symbols-outlined">
            bar_chart_4_bars
          </span>1.3M</li>
          <li className='cursor-pointer flex items-center gap-1 '><span class="text-[14px] md:text-[20px] material-symbols-outlined hover:text-blue-400">
            bookmark
          </span>
            <span class="hover:text-blue-400 text-[14px] md:text-[20px] material-symbols-outlined">
              ios_share
            </span></li>

        </ul>

      </div>

    </div>




  </div>
  )
}

export default Post