import React from 'react'
import Image from 'next/image'
function TrackExHero() {
  return (
    <div className="bg-gradient-to-t from-pink-200 to-blue-300 pt-6 sm:pt-8 lg:pt-12 pb-12 sm:pb-8 lg:pb-6">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex flex-col overflow-hidden rounded-lg bg-blue-400 sm:flex-row md:h-80 border-2 border-yellow-300">

          {/* <!-- content - start --> */}
          <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
            <h2 className="mb-4 text-4xl font-bold text-white md:text-2xl lg:text-4xl">TrackEx</h2>

            <p className="mb-2 max-w-md text-yellow-400 font-bold text-xl underline underline-offset-8">Helps you to</p>
            <p className=' text-white text-lg font-medium'>Comfortably keep track of all of your individual costs.</p>
            <p className=' text-white text-lg font-medium'>Organize all your expenses in a systematicaly at one place</p>
            <p className=' text-white text-lg font-medium'>Analyze the areas where it got overspent through visualal graphic view</p>
            <div className="mt-auto">
              <a href="#" className="inline-block rounded-lg bg-white px-8 py-3 text-center text-xl font-semibold border text-blue-500 outline-none ring-indigo-300 transition duration-100 hover:bg-purple-400 hover:text-white focus-visible:ring active:bg-purple-400 active:text-white md:text-base">Start Tracking Now </a>
            </div>
          </div>
          {/* <!-- content - end --> */}
          {/* <!-- image - start --> */}
          <div className="order-first h-48 w-full bg-gray-300 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
            <Image src="/TrackEx_Hero_image.jpg" height={500} width={500} loading="lazy" alt="TrackEx image" className="h-full w-full object-cover object-center" />
          </div>
          {/* <!-- image - end --> */}
        </div>
      </div>
    </div>
  )
}

export default TrackExHero