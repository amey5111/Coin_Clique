import React, { useState } from 'react';
import { YearPickerPropTypes } from '../types/propTypes';

const YearPicker: React.FC<YearPickerPropTypes> = ({ onYearChange }) => {
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear());

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const year = parseInt(event.target.value, 10);
    setSelectedYear(year);
    onYearChange(year);
  };

  const startYear = 1010;
  const endYear = new Date().getFullYear(); // Current year
  const years = [];

  for (let year = startYear; year <= endYear; year++) {
    years.push(year);
  }

  return (
    <div className='flex relative top-0 right-0 justify-between bg-purple-300 rounded-lg w-fit px-1 lg:px-5 ml-auto text-xs lg:text-base font-medium pb-1 lg:pb-2 pt-1 lg:pt-3'>
      <label htmlFor="yearPicker" className='mr-2 my-auto'>Select Year</label>
      <select className='bg-blue-100 border border-blue-500 rounded-md p-2 h-fit my-auto' id="yearPicker" value={selectedYear} onChange={handleYearChange}>
        {years.map((year) => (
          <option key={year} value={year} className=' h-1/2'>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default YearPicker;