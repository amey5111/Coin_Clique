import React from 'react'
import Image from 'next/image'
function TrackExHero() {
  return (
    <div className="bg-gradient-to-t from-blue-300 to-pink-200 pt-6 sm:pt-8 lg:pt-12 pb-12 sm:pb-8 lg:pb-6">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex flex-col overflow-hidden rounded-lg bg-pink-400 sm:flex-row md:h-80  border-2 border-yellow-300">
          {/* <!-- image - start --> */}
          <div className="order-first h-48 w-full bg-gray-300 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
            <Image src="/splitEx_Hero_image.jpg" height={500} width={500} loading="lazy" alt="Photo by Andras Vas" className="h-full w-full object-cover object-center" />
          </div>
          {/* <!-- image - end --> */}
          {/* <!-- content - start --> */}
          <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
            <h2 className="mb-4 text-4xl font-bold text-white md:text-2xl lg:text-4xl">SplitEx</h2>

            <p className="mb-2 max-w-md text-yellow-400 font-bold text-xl underline underline-offset-8">Helps you to</p>
            <p className=' text-white text-lg font-medium'>Organise all expenses during an event</p>
            <p className=' text-white text-lg font-medium'>Split that expenses among your team</p>
            <p className=' text-white text-lg font-medium'>Together, update and manage the spending during the entire event.</p>
            <div className="mt-auto">
              <a href="#" className="inline-block rounded-lg bg-white px-8 py-3 text-center text-xl font-semibold border text-pink-500 outline-none ring-indigo-300 transition duration-100 hover:bg-purple-400 hover:text-white focus-visible:ring active:bg-purple-400 active:text-white md:text-base">Start Spliting Now </a>
            </div>
          </div>
          {/* <!-- content - end --> */}
        </div>
      </div>
    </div>
  )
}

export default TrackExHero