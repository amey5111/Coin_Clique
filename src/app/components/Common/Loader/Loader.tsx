import React from 'react'

const Loader: React.FC<{text : string}> = ({text}) => {
  return (
    <div className="w-full gap-x-2 flex justify-center items-center h-full my-10">
    <div
      className="w-5 bg-[#d991c2] animate-pulse h-5 rounded-full"
    ></div>
    <div
      className="w-5 animate-pulse h-5 bg-[#9869b8] rounded-full"
    ></div>
    <div
      className="w-5 h-5 animate-pulse bg-[#6756cc] rounded-full"
    ></div>
    <div className="animate-pulse text-purple-300 font-bold text-center text-xl rounded-xl">{text}</div>
  </div>
  )
}
export default Loader;