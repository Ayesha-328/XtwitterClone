import React from 'react'
import profile from "../profile.png"

const Sidebar = () => {
  return (
    <div className="sidebar flex flex-col w-full lg:w-[55%] items-start  md:pr-2 sticky top-0 h-screen ">
    <div className="logo flex justify-start lg:justify-start px-2 pt-3 mb-4">
      <svg className='w-8 invert' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>
    </div>
      <ul className="flex flex-col text-lg md:space-y-3 space-y-2 ">
        <li className='flex items-center cursor-pointer w-fit pr-2 hover:bg-gray-700/40 hover:rounded-full'> <span className="p-2 material-symbols-outlined">
          home
        </span><span className='hidden md:block'>Home</span></li>
        <li className='flex cursor-pointer items-center w-fit hover:bg-gray-700/40 hover:rounded-full pr-2'> <span className="p-2 material-symbols-outlined">
          search
        </span><span className='hidden md:block'>Explore</span></li>
        <li className='flex items-center cursor-pointer w-fit pr-2 hover:bg-gray-700/40 hover:rounded-full'> <span className="p-2 material-symbols-outlined">
          notifications
        </span><span className='hidden md:block'>Notifications</span></li>
        <li className='flex items-center cursor-pointer w-fit pr-2 hover:bg-gray-700/40 hover:rounded-full'> <span class="material-symbols-outlined p-2">
indeterminate_check_box
</span><span className='hidden md:block'>Grok</span></li>
        <li className='flex items-center cursor-pointer w-fit pr-2 hover:bg-gray-700/40 hover:rounded-full'> <span className="p-2 material-symbols-outlined">
          list
        </span><span className='hidden md:block'>Lists</span></li>
        <li className='flex items-center cursor-pointer w-fit pr-2 hover:bg-gray-700/40 hover:rounded-full'> <span className="p-2 material-symbols-outlined">
          bookmark
        </span><span className='hidden md:block'>Bookmarks</span></li>
        <li className='flex items-center cursor-pointer w-fit pr-2 hover:bg-gray-700/40 hover:rounded-full'> <span className="p-2 material-symbols-outlined">
          group
        </span><span className='hidden md:block'>Communities</span></li>
        <li className='flex items-center cursor-pointer w-fit pr-2 hover:bg-gray-700/40 hover:rounded-full'>
          <span className='p-2'>
            <svg className='w-5 invert' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>
          </span><span className='hidden md:block'>Premium</span>
          </li>
        <li className='flex items-center cursor-pointer w-fit pr-2 hover:bg-gray-700/40 hover:rounded-full'> <span className="p-2 material-symbols-outlined">
          person
        </span><span className='hidden md:block'>Profile</span></li>
        <li className='flex items-center cursor-pointer w-fit pr-2 hover:bg-gray-700/40 hover:rounded-full'> <span className="p-2 material-symbols-outlined">
          more
        </span><span className='hidden md:block'>More</span></li>

      </ul>
      <button className='bg-[#1d9bf0] rounded-full px-2 py-1 md:px-3 md:py-2 md:w-[80%] mt-3 hover:bg-[#1196ef]'><span className='hidden md:block'>Post</span>
      <span className=" md:hidden material-symbols-outlined">
edit
</span></button>
        <div className='flex md:hidden my-4 items-center cursor-pointer w-fit  hover:bg-gray-700/40 hover:rounded-full'> <img className='w-9 h-9 rounded-full' src={profile} alt="" /></div>



<div className="user hidden md:flex justify-between w-[98%] items-center my-3 p-2  bg-gray-800/50 cursor-pointer rounded-full absolute bottom-0">
      <div className='flex gap-2 items-center'>
      <img className='w-8 h-8 rounded-full' src={profile} alt="" />
      <div>
        <div className="font-bold">Ayesha</div>
        <div className="text-gray-600 text-xs">@ayesha</div>
      </div>

      </div>
      <span className="text-gray-500 cursor-pointer material-symbols-outlined">
            more_horiz
          </span>

    </div>


    </div>
  )
}

export default Sidebar