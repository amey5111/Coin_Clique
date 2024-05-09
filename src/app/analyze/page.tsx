"use client";
import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip } from 'chart.js';
import axios from 'axios';
import { Expense } from '../addexpenses/types/types';
import DailyLineGraph from './components/graphs/DailyLineGraph';
import MonthWiseGraph from './components/graphs/MonthWiseGraph';
import MonthsBarGraph from './components/graphs/MonthsBarGraph';
import GraphOptionsMenu from './components/GraphOptionsMenu';
import Loader from '../components/Common/Loader/Loader';
// import Image from 'next/image';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export default function AnalyzePage() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    fetchExpenses();
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Check screen size on initial render

    window.addEventListener('resize', handleResize); // Listen for window resize events

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up the event listener
    };
  }, []);

  const fetchExpenses = async () => {
    try {
      const expenseresponse = await axios.get("/api/userExpenses/fetchExpenses");
      const fetchedExpenses = expenseresponse?.data.data?.expenses;
      setExpenses(fetchedExpenses);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching expenses:", error);
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <div>
          <Loader text="Plotting your Expenses" />
        </div>
      ) : (
        <div className={`flex flex-row ${isMobile ? 'flex-col' : ''}`}>
          <div className={`w-1/4 ${isMobile ? 'w-full mb-4' : ''}`}>
            <GraphOptionsMenu />
          </div>
          <div className={`pt-3 w-3/4 ${isMobile ? 'w-full' : ''}`}>
            <div className="w-full m-auto pr-1 lg:pr-10 bg-gray-100">
              <MonthsBarGraph isMobile = {isMobile} />
            </div>
            <div className="w-full m-auto pr-1 lg:pr-10 bg-gray-100">
              <MonthWiseGraph isMobile={isMobile} />
            </div>
            <div className="w-full m-auto pr-1 lg:pr-10 bg-gray-100">
              <DailyLineGraph />
            </div>
          </div>
        </div>
      )}
    </>
  );
}