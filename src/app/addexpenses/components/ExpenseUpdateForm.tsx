import React, { useState } from 'react'
import { Expense } from '../types/types';
import { FormEventType, InputChangeEvent } from '../types/eventTypes';

export default function ExpenseUpdateForm({ onClose }: { onClose: () => void }) {
    const [expense, setExpense] = useState<Expense>({
        date: '',
        givenTo: '',
        amount: 0,
        tag: '',
        remarks: ''
    });

    const [isFormOpen, setIsFormOpen] = useState(true);


    const handleChange = (e: InputChangeEvent) => {
        const { name, value } = e.target;
        setExpense(prevExpense => ({
            ...prevExpense,
            [name]: value
        }));
    };

    const handleUpdate = (e: FormEventType) => {
        e.preventDefault();
        console.log("update")
    };

    const handleClose = () => {
        setIsFormOpen(false);
        onClose();
    };

    return (
        <>
            {isFormOpen && (<div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 rounded-lg">
                <div className="bg-white w-full md:w-1/2 lg:w-1/3 rounded-lg shadow-lg p-6">
                    <form onSubmit={handleUpdate} className="mt-4 mb-4 w-full">
                        <h2 className="text-xl font-bold text-center mb-2 text-blue-500">Update Expense</h2>
                        <h5 className="text-sm font-medium text-center mb-3 text-purple-500">Change the values of the desired fields and click on update</h5>
                        <div className="flex flex-col space-y-4">
                            <input type="date" name="date" value={expense.date} onChange={handleChange} placeholder="Date" className="border p-2 bg-gray-50 rounded hover:border-blue-300 focus:outline-none focus:border-blue-500" />
                            <input type="text" name="givenTo" value={expense.givenTo} onChange={handleChange} placeholder="Given To" className="border p-2 bg-gray-50 rounded hover:border-blue-300 focus:outline-none focus:border-blue-500" />
                            <input type="number" name="amount" value={expense.amount} onChange={handleChange} placeholder="Amount" className="border p-2 bg-gray-50 rounded hover:border-blue-300 focus:outline-none focus:border-blue-500" />
                            <input type="text" name="tag" value={expense.tag} onChange={handleChange} placeholder="Tag" className="border p-2 bg-gray-50 rounded hover:border-blue-300 focus:outline-none focus:border-blue-500" />
                            <input type="text" name="remarks" value={expense.remarks} onChange={handleChange} placeholder="Remarks" className="border p-2 bg-gray-50 rounded hover:border-blue-300 focus:outline-none focus:border-blue-500" />
                            <div className=" flex flex-row justify-around">
                                <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600">Update</button>
                                <button type="button" className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-yellow-600" onClick={handleClose}> Close
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>)}
        </>
    )
}
