"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-purple-500 sticky">
      <div className="max-w-7xl mx-auto px-4 py-1 lg:py-2">
        <div className="flex justify-between h-16">
          <div className="flex w-full justify-between">
            <div className="flex-shrink-0 flex items-center flex-row">
              <span className="text-white font-bold">
                <Image src="/logo004.png" alt="wwb logo" width="70" height="70" />
              </span>
              <span className=" text-yellow-300 font-bold text-3xl">Coin_Clique</span>
            </div>
            <div className="hidden lg:block mt-auto mb-auto">
              <div className="flex items-baseline space-x-4">
                <Link href="/" className="text-white hover:bg-purple-400 hover:text-white px-3 py-2 rounded-md text-lg font-semibold">About</Link>
                <Link href="/" className="text-white hover:bg-purple-400 hover:text-white px-3 py-2 rounded-md text-lg font-semibold">TrackEx</Link>
                <Link href="/" className="text-white hover:bg-purple-400 hover:text-white px-3 py-2 rounded-md text-lg font-semibold">SplitEx</Link>
                <Link href="/" className="text-purple-500 hover:bg-purple-400 hover:text-white px-3 py-2 rounded-2xl text-base font-medium bg-white">Login</Link>
                <Link href="/" className="text-purple-500 hover:bg-purple-400 hover:text-white px-3 py-2 rounded-2xl text-base font-medium bg-white">SignUp</Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleNavbar} className="inline-flex items-center justify-center p-2 rounded-md text-yellow-300 hover:text-white font-bold text-2xl hover:bg-purple-400 focus:outline-none focus:bg-purple-400 focus:text-yellow-300">
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className="text-gray-300 hover:bg-purple-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium text-center">About</Link>
          <Link href="/" className="text-gray-300 hover:bg-purple-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium text-center">TrackEx</Link>
          <Link href="/" className="text-gray-300 hover:bg-purple-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium text-center">SplitEx</Link>
          <Link href="/" className="text-gray-300 hover:bg-purple-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium text-center">Login</Link>
          <Link href="/" className="text-gray-300 hover:bg-purple-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium text-center">SignUp</Link>
        </div>
      </div>
    </nav>
  );

};
