"use client";
import React, { useState } from "react";
import { Expense } from "../types/types";
import FallBackCard from "@/app/components/Common/FallBackCard/FallBackCard";
import { FormEventType, InputChangeEvent } from "../types/eventTypes";
import ExpenseUpdateForm from "./ExpenseUpdateForm";

const ExpenseTable: React.FC<{ expenses: Expense[] }> = ({ expenses }) => {
  const [selectedExpenses, setSelectedExpenses] = useState<number[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCheckboxChange = (index: number) => {
    const selectedIndex = selectedExpenses.indexOf(index);
    if (selectedIndex === -1) {
      setSelectedExpenses([...selectedExpenses, index]);
    } else {
      const updatedSelection = [...selectedExpenses];
      updatedSelection.splice(selectedIndex, 1);
      setSelectedExpenses(updatedSelection);
    }
  };

  const handleDeleteSelected = () => {
    // Logic to delete selected expenses
    // You need to implement the deletion logic based on the selectedExpenses array
  };

  const handleViewAndUpdate = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      {expenses?.length > 0 ? (
        <><h2 className="text-xl font-semibold mb-2 text-blue-500">Expense Table</h2>
          <table className="table-auto w-full">
            <thead className="bg-purple-100">
              <tr>
                <th className="border border-purple-600 px-4 py-2">Date</th>
                <th className="border border-purple-600 px-4 py-2">Given To</th>
                <th className="border border-purple-600 px-4 py-2">Amount</th>
                <th className="border border-purple-600 px-4 py-2">Tag</th>

                <th className="border border-purple-600 px-4 py-2">
                  {selectedExpenses.length > 0 ? (
                    <button
                      onClick={handleDeleteSelected}
                      className="bg-red-500 hover:bg-red-600 text-sm text-white font-bold py-1 px-2 rounded-lg"
                    >
                      DELETE SELECTED
                    </button>
                  ) : (
                    <div>Select Expenses</div>
                  )}
                </th>
              </tr>
            </thead>
            <tbody>
              {expenses?.map((expense, index) => (
                <tr key={index}>
                  <td className="border border-purple-600 px-2 py-2 text-center">{expense.date}</td>
                  <td className="border border-purple-600 px-2 py-2 text-center">{expense.givenTo}</td>
                  <td className="border border-purple-600 px-2 py-2 text-center">{expense.amount}</td>
                  <td className="border border-purple-600 px-2 py-2 text-center">{expense.tag}</td>

                  <td className="border border-purple-600 px-2 py-2 text-center">
                    <input
                      type="checkbox"
                      checked={selectedExpenses.includes(index)}
                      onChange={() => handleCheckboxChange(index)}
                      className="w-4 h-4 text-indigo-600 focus:ring-indigo-500 border border-purple-600-gray-300 py-auto rounded-lg cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table><div className="mt-3 flex justify-end">
            {selectedExpenses.length === 1 &&
              <>
                <button
                  className="bg-yellow-500 hover:bg-yellow-600 text-sm text-white py-2 px-4 rounded-lg mr-2" data-modal-target="static-modal" data-modal-toggle="static-modal"
                  onClick={handleViewAndUpdate}
                >
                  VIEW & UPDATE
                </button>
              </>
            }
            <button
              onClick={handleDeleteSelected}
              className="bg-blue-500 hover:bg-blue-600 text-sm text-white py-2 px-4 rounded-lg mr-2"
            >
              ANALYZE
            </button>
            <button
              onClick={handleDeleteSelected}
              className="bg-purple-500 hover:bg-purple-600 text-sm text-white py-2 px-4 rounded-lg mr-2"
            >
              VIEW ALL
            </button>
            {selectedExpenses.length > 0 ? (
              <button
                onClick={handleDeleteSelected}
                className="bg-yellow-500 hover:bg-yellow-600 text-sm text-white py-2 px-4 rounded-lg mr-2"
              >
                DESELECT ALL
              </button>
            ) : (
              <button
                onClick={handleDeleteSelected}
                className="bg-yellow-500 hover:bg-yellow-600 text-sm text-white py-2 px-4 rounded-lg mr-2"
              >
                SELECT ALL
              </button>

            )}
          </div>
          {isModalOpen && <ExpenseUpdateForm onClose={() => setIsModalOpen(false)} />}
        </>
      ) : (
        <FallBackCard imgSrc="/no data concept vector.jpg" heading="Start Adding Expenses..." subHeading="Once added expenses will be shown here" />

      )}
    </>
  );
};

export default ExpenseTable;
