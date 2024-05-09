import React, { useState } from 'react';
import { SortOptionsDropdownProps } from '../types/propTypes';
import { Expense } from '../types/types';

const SortOptionsDropdown: React.FC<SortOptionsDropdownProps> = ({ expenses, onOptionClick }) => {
  const [isExpensesReversed, setIsExpensesReversed] = useState(false);
  const [expensesData, setExpensesData] = useState<Expense[]>([]);

  const handleOptionClick = (option: string) => {
    console.log(`Selected option: ${option}`);
    console.log(expenses);
    setExpensesData(expenses);

    // Handle sorting based on the selected option
    switch (option) {
      case "Newly added first":
        console.log(isExpensesReversed);
        if (isExpensesReversed) {
          setExpensesData(expenses.reverse());
          setIsExpensesReversed(false);
        }
        break;
      case "Newly added last":
        if (isExpensesReversed) {
          setExpensesData(expenses.reverse());
          setIsExpensesReversed(false);
        } else {
          setExpensesData(expenses.reverse());
          setIsExpensesReversed(true);
        }
        console.log(isExpensesReversed);
        break;
      case "Date":
        setExpensesData(
          expenses.sort((a: Expense, b: Expense) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateA.getTime() - dateB.getTime();
          })
        );
        break;
      case "Amount":
        setExpensesData(
          expenses.sort((a: Expense, b: Expense) => {
            const amountA = a.amount;
            const amountB = b.amount;
            return amountA - amountB;
          })
        );
        break;
      case "Tag":
        setExpensesData(
          expenses.sort((a: Expense, b: Expense) => {
            const tagA = a.tag;
            const tagB = b.tag;
            return tagA.localeCompare(tagB);
          })
        );
        break;
      default:
        break;
    }
    onOptionClick();
  };

  return (
    <div className="pl-5 lg:pl-0 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <div
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
          onClick={() => handleOptionClick('Newly added first')}
        >
          Newly added first (Default)
        </div>
        <div
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
          onClick={() => handleOptionClick('Newly added last')}
        >
          Newly added last
        </div>
        <div
          className="block px-4 py-2 text-sm text-gray-700 hover:bg -gray-100 hover:text-gray-900 cursor-pointer"
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
  );
};

export default SortOptionsDropdown;