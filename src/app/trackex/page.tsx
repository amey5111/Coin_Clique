"use client";
import React, { useEffect, useState } from "react";
import { Expense } from "./types/types";
import ExpenseTable from "./components/ExpenseTable";
import axios from "axios";
import Loader from "../components/Common/Loader/Loader";
import ExpenseTableHeader from './components/TrackExHeader';


const ExpenseManager: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const expenseresponse = await axios.get("/api/userExpenses/fetchExpenses");
      const fetchedExpenses = expenseresponse?.data.data?.expenses;
      setExpenses(fetchedExpenses.reverse());
      setLoading(false); // Set loading to false when data is fetched
    } catch (error) {
      console.log("Error fetching expenses:", error);
      setLoading(false); // Ensure loading is set to false even if there's an error
    }
  };

  return (
    <>
      <ExpenseTableHeader fetchExpenses={fetchExpenses} />
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-x-4 w-full">
        <div className="w-full lg:mx-5">
          {loading ? (
            // Render Loader effect while loading
            <Loader />
          ) : (
            // Render ExpenseTable when not loading
            <ExpenseTable expenses={expenses} />
          )}
        </div>
      </div>
    </>
  );
};

export default ExpenseManager;
