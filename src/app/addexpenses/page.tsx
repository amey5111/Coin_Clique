"use client";
import React, { useEffect, useState } from "react";
import { Expense } from "./types/types";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import axios from "axios";
import Loader from "../components/Common/Loader/Loader";


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
      setExpenses(fetchedExpenses);
      setLoading(false); // Set loading to false when data is fetched
    } catch (error) {
      console.log("Error fetching expenses:", error);
      setLoading(false); // Ensure loading is set to false even if there's an error
    }
  };

  const handleSubmitExpense = async (expense: Expense) => {
    try {
      const response = await axios.post("/api/userExpenses/addExpenses", expense);
      console.log("signup success", response.data);
      fetchExpenses();
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-x-4">
      <div className="w-full md:w-2/5">
        <ExpenseForm onSubmit={handleSubmitExpense} />
      </div>
      <div className="w-full md:w-3/5 px-5">
        {loading ? (
          // Render Loader effect while loading
          <Loader />
        ) : (
          // Render ExpenseTable when not loading
          <ExpenseTable expenses={expenses} />
        )}
      </div>
    </div>
  );
};

export default ExpenseManager;
