import React from 'react'

export default function SortOptionsDropdown() {
    
    const handleOptionClick = (option : any) => {
        console.log(`Selected option: ${option}`);
        // You can perform further actions based on the selected option
      };

  return (
    <div className="pl-5 lg:pl-0 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <div
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
              onClick={() => handleOptionClick('Newly added first')}
            >
              Newly added first
            </div>
            <div
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
              onClick={() => handleOptionClick('Newly added last')}
            >
              Newly added last
            </div>
            <div
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
              onClick={() => handleOptionClick('Date')}
            >
              Date
            </div>
            <div
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
              onClick={() => handleOptionClick('Amount')}
            >
              Amount
            </div>
            <div
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
              onClick={() => handleOptionClick('Tag')}
            >
              Tag
            </div>
          </div>
        </div>
  )
}
