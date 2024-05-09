import React, { useState } from "react";
import { Expense } from "../types/types";
import FallBackCard from "@/app/components/Common/FallBackCard/FallBackCard";
import { FaTrash, FaPen } from "react-icons/fa"; // Importing icons
import { AiOutlineClose } from "react-icons/ai";

const ExpenseTable: React.FC<{ expenses: Expense[] }> = ({ expenses }) => {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const [selectedExpense, setselectedExpense] = useState<Expense | null>(null);


  const handleRowHover = (index: number) => {
    setHoveredRow(index);
  };

  const handleRowLeave = () => {
    setHoveredRow(null);
  };

  const handleDelete = (index: number) => {
    // Implement delete functionality here
    console.log("Delete expense at index:", index);
  };

  const handleUpdate = (index: number) => {
    // Implement update functionality here
    console.log("Update expense at index:", index);
  };

  const handleExpenseRowClick = (expense: Expense) => {
    setselectedExpense(expense);
  }

  const closePreviewExpenseModal = () => {
    setselectedExpense(null);
  }

  return (
    <>
      {expenses?.length > 0 ? (
        <>
          <div className='text-base text-yellow-500 mt-5 mb-2 font-normal lg:font-semibold pl-3'>Click on any row to preview that expense entry in detail</div>
          <div className="table-container overflow-x-auto px-1">
            <table className="table-auto lg:w-full">
              <thead>
                <tr>
                  <th className="border border-purple-600 px-1 lg:px-2 py-2 text-sm lg:text-lg font-light hidden lg:table-cell">Actions</th> {/* New column for actions, hidden on mobile */}
                  <th className="border border-purple-600 px-1 lg:px-4 py-2 text-sm lg:text-lg bg-purple-100">Date</th>
                  <th className="border border-purple-600 px-1 lg:px-4 py-2 text-sm lg:text-lg bg-purple-100">Given To</th>
                  <th className="border border-purple-600 px-1 lg:px-4 py-2 text-sm lg:text-lg bg-purple-100">Amount</th>
                  <th className="border border-purple-600 px-1 lg:px-4 py-2 text-sm lg:text-lg bg-purple-100">Tag</th>
                  <th className="border border-purple-600 px-1 lg:px-4 py-2 text-sm lg:text-lg bg-purple-100">Note</th>
                </tr>
              </thead>
              <tbody>
                {expenses?.map((expense, index) => (
                  <tr
                    key={index}
                    onMouseEnter={() => handleRowHover(index)}
                    onMouseLeave={handleRowLeave}
                    className=" hover:bg-blue-100"
                    onClick={() => handleExpenseRowClick(expense)}
                  >
                    {/* Conditionally rendering buttons only when row is hovered and on large screens */}
                    <td className="px-1 lg:px-4 py-2 text-center text-xs lg:text-base hidden lg:table-cell">
                      {hoveredRow === index && (
                        <div className="flex justify-between">
                          <button onClick={() => handleDelete(index)}>
                            <FaTrash className="text-red-500 text-lg lg:text-xl hover:text-blue-400" />
                          </button>
                          <button onClick={() => handleUpdate(index)}>
                            <FaPen className="text-yellow-500 text-lg lg:text-xl hover:text-blue-400" />
                          </button>
                        </div>
                      )}
                    </td>
                    <td className="border border-purple-600 px-1 lg:px-4 py-2 text-center text-xs lg:text-base cursor-pointer">{expense.date}</td>
                    <td className="border border-purple-600 px-1 lg:px-4 py-2 text-center text-xs lg:text-base cursor-pointer">{expense.givenTo}</td>
                    <td className="border border-purple-600 px-1 lg:px-4 py-2 text-center text-xs lg:text-base cursor-pointer">{expense.amount}</td>
                    <td className="border border-purple-600 px-1 lg:px-4 py-2 text-center text-xs lg:text-base cursor-pointer">{expense.tag}</td>
                    <td className="border border-purple-600 px-1 lg:px-4 py-2 text-center text-xs lg:text-base cursor-pointer">{expense.remarks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Modal for displaying expense details */}
          {selectedExpense && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
              <div className="bg-white p-6 rounded-lg max-w-lg w-full">
                <div className="flex justify-between mb-4">
                  <h2 className="text-xl font-bold text-center mb-2 text-blue-500">Preview Expense Details</h2>
                  <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300" onClick={closePreviewExpenseModal}><AiOutlineClose className="h-6 w-6 text-gray-700" /></button>
                </div>
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                  <div className="mb-4">
                    <label className="block text-blue-500 text-sm font-bold mb-2">Date</label>
                    <p className="text-gray-700 text-base">{selectedExpense.date}</p>
                  </div>
                  <div className="mb-4">
                    <label className="block text-blue-500 text-sm font-bold mb-2">Given To</label>
                    <p className="text-gray-700 text-base">{selectedExpense.givenTo}</p>
                  </div>
                  <div className="mb-4">
                    <label className="block text-blue-500 text-sm font-bold mb-2">Amount</label>
                    <p className="text-gray-700 text-base">{selectedExpense.amount}</p>
                  </div>
                  <div className="mb-4">
                    <label className="block text-blue-500 text-sm font-bold mb-2">Tag</label>
                    <p className="text-gray-700 text-base">{selectedExpense.tag}</p>
                  </div>
                  <div className="mb-4">
                    <label className="block text-blue-500 text-sm font-bold mb-2">Note</label>
                    <p className="text-gray-700 text-base">{selectedExpense.remarks}</p>
                  </div>
                </div>

              </div>
            </div>
          )}
        </>
      ) : (
        <FallBackCard imgSrc="/no data concept vector.jpg" heading="Start Adding Expenses..." subHeading="Once added expenses will be shown here" />
      )}
    </>
  );
};

export default ExpenseTable;