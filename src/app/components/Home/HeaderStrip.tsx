import React from 'react'
import Image from 'next/image'

function HeaderStrip() {
  return (
    <div className=" my-5 mx-auto py-15 h-16 bg-gradient-to-r from-cyan-500 to-yellow-500 text-center text-white text-3xl lg:text-4xl font-bold w-5/6 lg:w-3/5 rounded-xl flex flex-row justify-between">
        <Image className="mx-5 w-1/12 my-2" src="/triple-down-sign-svgrepo-com.svg" alt=" down arrow svg" height={50} width={50}/>
        <div className="my-auto">Features</div>
        <Image className="mx-5 w-1/12 my-2" src="/triple-down-sign-svgrepo-com.svg" alt=" down arrow svg" height={50} width={50}/>
        </div>
  )
}

export default HeaderStrip