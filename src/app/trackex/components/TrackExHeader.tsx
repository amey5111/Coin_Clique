"use client";
import React, { useState } from 'react';
import axios from 'axios';
import { AiOutlineLineChart, AiOutlinePlus, AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
import { TbArrowsSort } from "react-icons/tb";
import ExpenseForm from './ExpenseForm';
import { Expense } from '../types/types';
import SortOptionsDropdown from './SortOptionsDropdown'
import { ExpenseTableHeaderProps } from '../types/propTypes';

export const TrackExHeader: React.FC<ExpenseTableHeaderProps> = ({ fetchExpenses }) => {

    const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
    const [showSearchDrawer, setShowSearchDrawer] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [isSortDrawerOpen, setIsSortDrawerOpen] = useState(false);

    const handleSubmitExpense = async (expense: Expense) => {
        try {
            const response = await axios.post("/api/userExpenses/addExpenses", expense);
            await fetchExpenses();
            console.log("signup success", response.data);
        } catch (error) {
            console.log("error", error);
        } finally {
            toggleAddExpenseModal();
        }
    };

    const toggleAddExpenseModal = () => {
        setShowAddExpenseModal(!showAddExpenseModal);
    };

    const toggleSearchDrawer = () => {
        setShowSearchDrawer(!showSearchDrawer);
        setSelectedOption('');
    };

    const handleSelectedOptionStyle = (event: any) => {
        setSelectedOption(event.target.value);
    };

    const handleClearSelectedOption = () => {
        setSelectedOption('');
    };

    const toggleDropdown = () => {
        setIsSortDrawerOpen(!isSortDrawerOpen);
    };


    return (
        <>
            <div className='flex flex-row pt-3 flex-wrap'>
                <h1 className='lg:text-4xl text-2xl font-extrabold font-mono text-purple-500 pl-5 mr-auto'>Your Expenses</h1>
                <div className='ml-auto flex mt-1 lg:mt-0'>
                    <button className="bg-pink-500 hover:bg-pink-600 h-full mt-auto text-xs lg:text-lg text-white py-1 px-2 rounded lg:rounded-lg mr-2 flex items-center">
                        <AiOutlineLineChart className="h-4 w-4 lg:h-6 lg:w-6 mr-1" /> Analyze
                    </button>
                    <div className="relative inline-block text-left">
                        <button
                            type="button"
                            onClick={toggleDropdown}
                            className="bg-blue-500 hover:bg-blue-600 h-full text-xs lg:text-lg text-white py-1 px-2 rounded lg:rounded-lg mr-2 flex items-center"
                        >
                            <TbArrowsSort className="h-4 w-4 lg:h-6 lg:w-6 mr-1" />Sort
                        </button>
                        {isSortDrawerOpen && (
                            <SortOptionsDropdown />
                        )}
                    </div>
                    <button onClick={toggleSearchDrawer} className="bg-blue-500 hover:bg-blue-600 h-full mt-auto text-xs lg:text-lg text-white py-1 px-2 rounded lg:rounded-lg mr-2 flex items-center">
                        Search <AiOutlineSearch className="h-4 w-4 lg:h-5 lg:w-5 ml-2" />
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-600 h-full mt-auto text-xs lg:text-lg text-white py-1 px-2 rounded lg:rounded-lg mr-2 flex items-center" onClick={toggleAddExpenseModal}>
                        <AiOutlinePlus className="h-4 w-4 lg:h-6 lg:w-6 mr-1" /> Add New
                    </button>
                </div>
            </div>
            {/* Modal */}
            {showAddExpenseModal && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <button className="absolute top-0 right-0 m-4 p-1 rounded-full bg-gray-200 hover:bg-gray-300" onClick={toggleAddExpenseModal}>
                                    <AiOutlineClose className="h-6 w-6 text-gray-700" />
                                </button>
                                <ExpenseForm onSubmit={handleSubmitExpense} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {/* search drawer */}
            {showSearchDrawer && (
                <>
                    <div className="drawer fixed top-0 right-0 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out">
                        <div className="drawer-content p-4">
                            <div className="flex flex-col space-y-4">
                                <div className='flex flex-row'>
                                    <h2 className="text-xl font-bold text-center mb-2 text-blue-500 w-fit">Search Expenses</h2>
                                    <button className="ml-auto p-3 rounded-full bg-gray-200 hover:bg-gray-300" onClick={toggleSearchDrawer}><AiOutlineClose className="h-4 w-4 text-gray-700" /></button>
                                </div>
                                <div className="relative">
                                    <input type="text" placeholder="Search..." className=" border-2 rounded-md px-3 py-2 border-purple-500 focus:outline-none focus:border-blue-500" />
                                </div>
                                <div>
                                    <p className="text-gray-600">Search by:</p>
                                    <div className="flex flex-col text-medium space-y-3 mt-3">
                                        <label className={`inline-flex border border-purple-500 py-1 rounded-lg px-3 w-fit ${selectedOption === 'date' ? "bg-purple-500 text-white border-white" : ""}`}>
                                            <input checked={selectedOption === 'date'} type="radio" className="form-radio text-purple-500" name="searchBy" onChange={handleSelectedOptionStyle} value="date" />
                                            <span className="ml-2">Date</span>
                                        </label>
                                        <label className={`inline-flex border border-purple-500 py-1 rounded-lg px-3 w-fit ${selectedOption === 'tagAmount' ? "bg-purple-500 text-white border-white" : ""}`}>
                                            <input checked={selectedOption === 'tagAmount'} type="radio" className="form-radio text-purple-500" name="searchBy" onChange={handleSelectedOptionStyle} value="tagAmount" />
                                            <span className="ml-2">Tag </span>
                                        </label>
                                        <label className={`inline-flex border border-purple-500 py-1 rounded-lg px-3 w-fit ${selectedOption === 'givenTo' ? "bg-purple-500 text-white border-white" : ""}`}>
                                            <input checked={selectedOption === 'givenTo'} type="radio" className="form-radio text-purple-500" name="searchBy" onChange={handleSelectedOptionStyle} value="givenTo" />
                                            <span className="ml-2">Given To</span>
                                        </label>
                                        <label className={`inline-flex border border-purple-500 py-1 rounded-lg px-3 w-fit ${selectedOption === 'note' ? "bg-purple-500 text-white border-white" : ""}`}>
                                            <input checked={selectedOption === 'note'} type="radio" className="form-radio text-purple-500" name="searchBy" onChange={handleSelectedOptionStyle} value="note" />
                                            <span className="ml-2">Note</span>
                                        </label>
                                        <label className={`inline-flex border border-purple-500 py-1 rounded-lg px-3 w-fit ${selectedOption === 'amount' ? "bg-purple-500 text-white border-white" : ""}`}>
                                            <input checked={selectedOption === 'amount'} type="radio" className="form-radio text-purple-500" name="searchBy" onChange={handleSelectedOptionStyle} value="amount" />
                                            <span className="ml-2">Amount</span>
                                        </label>
                                    </div>
                                </div>
                                <button className="bg-blue-500 text-white py-2 px-auto mx-auto rounded-md hover:bg-blue-600 w-1/2 transition duration-300 ease-in-out">Search</button>
                                <button className="bg-yellow-500 text-white py-2 px-auto mx-auto rounded-md hover:bg-yellow-600 w-1/2 transition duration-300 ease-in-out" onClick={handleClearSelectedOption}>Clear</button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default TrackExHeader;