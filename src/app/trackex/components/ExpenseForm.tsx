import React, { useState } from 'react';
import { Expense } from '../types/types';
import { ExpenseFormProps } from '../types/propTypes';
import { FormEventType, InputChangeEvent } from '../types/eventTypes';

const ExpenseForm: React.FC<ExpenseFormProps> = ({ onSubmit }) => {
  const [expense, setExpense] = useState<Expense>({
    date: '',
    givenTo: '',
    amount: 0,
    tag: '',
    remarks: ''
  });

  const [selectedField, setSelectedField] = useState<string>('');

  const handleChange = (e: InputChangeEvent) => {
    const { name, value } = e.target;
    setExpense(prevExpense => ({
      ...prevExpense,
      [name]: value
    }));
    setSelectedField('');
  };

  const handleFieldSelect = (fieldName: string) => {
    setSelectedField(fieldName);
  };

  const handleSubmit = (e: FormEventType) => {
    e.preventDefault();
    onSubmit(expense);
    handleClearClick()
  };

  const handleClearClick = () =>{
    setExpense({
      date: '',
      givenTo: '',
      amount: 0,
      tag: '',
      remarks: ''
    });
    setSelectedField('')
  }

  return (
    <form onSubmit={handleSubmit} className=" mt-4 mb-4 w-5/6 mx-auto">
      <h2 className="text-xl font-bold text-center mb-2 text-blue-500">Add New Expense</h2>
      <div className="flex flex-col space-y-4">
        <input
          type="date"
          name="date"
          value={expense.date}
          onChange={handleChange}
          placeholder="Date"
          className="border p-2 bg-gray-50 rounded hover:border-blue-300 w-full"
          onFocus={() => handleFieldSelect('')}
        />
        <input
          type="text"
          name="givenTo"
          value={expense.givenTo}
          onChange={handleChange}
          placeholder="Given To"
          className="border p-2 bg-gray-50 rounded hover:border-blue-300"
          onFocus={() => handleFieldSelect('')}
        />
        <input
          type="number"
          name="amount"
          value={expense.amount}
          onChange={handleChange}
          placeholder="Amount"
          className="border p-2 bg-gray-50 rounded hover:border-blue-300"
          onFocus={() => handleFieldSelect('')}
        />
        <input
          type="text"
          name="tag"
          value={expense.tag}
          onChange={handleChange}
          placeholder="Tag"
          className="border p-2 bg-gray-50 rounded hover:border-blue-300"
          onFocus={() => handleFieldSelect('tag')}
        />
        <input
          type="text"
          name="remarks"
          value={expense.remarks}
          onChange={handleChange}
          placeholder="Remarks"
          className="border p-2 bg-gray-50 rounded hover:border-blue-300"
          onFocus={() => handleFieldSelect('remarks')}
        />
        <div className='flex flex-row flex-wrap justify-evenly text-sm lg:text-base'>
        <button type='button' className="bg-yellow-500 text-white hover:bg-yellow-600 my-1 lg-my-0 px-1 lg:px-2 py-1 rounded-md" onClick={handleClearClick}>CLEAR</button>
        <button type="submit" className="bg-blue-500 text-white hover:bg-blue-600 my-1 lg-my-0 px-1 lg:px-2 py-1 rounded-md">ADD EXPENSE</button>
        </div>
        {selectedField === 'tag' && (
          <div>
            <h3 className=' bg-blue-300 text-white text-xl font-semibold text-center w-full ml-auto mr-auto rounded-t-lg'>Info</h3>
            <ul className=" pl-5 bg-blue-100 text-black text-sm text-pretty pb-1 w-full ml-auto mr-auto rounded-b-lg">
              <li className='mb-1'>*Using Tag field You may categorize, search, and analyze the expenses.</li>
              <li className='mb-1'>*One Tag may represent one category of spending</li>
              <li className='mb-1'>*Makes it easy to search for and analyze expenses in that category.</li>
              <li className='mb-1'>*Tags can only contain lowercase letters and spaces, no special characters.</li>
            </ul>
          </div>
        )}
        {selectedField === 'remarks' && (
          <div>
            <h3 className=' bg-blue-300 text-white text-xl font-semibold text-center w-full ml-auto mr-auto rounded-t-lg'>Info</h3>
            <ul className=" pl-5 bg-blue-100 text-black text-sm text-pretty pb-1 w-full ml-auto mr-auto rounded-b-lg">
              <li className='mb-1'>*Optional Remarks can be added with the expense.</li>
              <li className='mb-1'>*Max Length: 50 letters</li>
            </ul>
          </div>
        )}
      </div>
    </form>
  );
};
export default ExpenseForm;
