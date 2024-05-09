import React, { useState } from 'react';

const months = [
  { value: 0, label: 'January' },
  { value: 1, label: 'February' },
  { value: 2, label: 'March' },
  { value: 3, label: 'April' },
  { value: 4, label: 'May' },
  { value: 5, label: 'June' },
  { value: 6, label: 'July' },
  { value: 7, label: 'August' },
  { value: 8, label: 'September' },
  { value: 9, label: 'October' },
  { value: 10, label: 'November' },
  { value: 11, label: 'December' },
];

interface MonthDropdownProps {
  onMonthChange: (month: number) => void;
}

const MonthDropdown: React.FC<MonthDropdownProps> = ({ onMonthChange }) => {
  const d = new Date();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState<number>(d.getMonth());

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectMonth = (month: number) => {
    setSelectedMonth(month);
    setIsOpen(false);
    onMonthChange(month);
  };


  return (
    <div className="mr-5 bg-purple-300 rounded-lg px-2 lg:px-5 py-2 font-medium pt-3 md:w-auto w-full">
      <div>
        <div className="w-fit mx-auto text-xs lg:text-base mb-1">Select Month</div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border shadow-sm px-1 lg:px-4 py-1 lg:py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 bg-blue-100 border-blue-500 p-2 h-fit my-auto"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={toggleDropdown}
        >
          {months[selectedMonth].label}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-full md:w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            {months.map((month) => (
              <button
                key={month.value}
                className={`text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900 w-full text-left ${selectedMonth === month.value ? 'bg-gray-200' : ''
                  }`}
                role="menuitem"
                onClick={() => selectMonth(month.value)}
              >
                {month.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MonthDropdown;