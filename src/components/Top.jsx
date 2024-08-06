import React from 'react'

const Top = () => {
  return (
    <div className="top w-full bg-gray-900/50 flex border-b-[1px] border-y-gray-600/50 sticky top-0 ">
        <div className="flex w-[90%]">
    <div className="left py-3 text-center w-1/2 relative hover:bg-gray-800 cursor-pointer font-bold">For You
      <div className="absolute  w-14 h-1 bg-[#1d9bf0] rounded-full bottom-0 left-[30%] md:left-[40%]"></div>
    </div>
    <div className="right py-3 text-center w-1/2 hover:bg-gray-800 cursor-pointer text-gray-500 font-bold">Following</div>

        </div>
    <div className="setting py-3 px-2 w-[10%] hover:bg-gray-800 cursor-pointer"><span class="material-symbols-outlined">
      settings
    </span></div>
  </div>
  )
}

export default Top