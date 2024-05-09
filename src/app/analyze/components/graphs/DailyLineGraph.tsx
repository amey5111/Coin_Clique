"use client";
import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, } from 'chart.js';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Expense } from '@/app/addexpenses/types/types';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

export default function DailyLineGraph() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const expenseResponse = await axios.get("/api/userExpenses/fetchExpenses");
      const fetchedExpenses = expenseResponse?.data.data?.expenses;
      fetchedExpenses.sort((a: { date: string | number | Date; }, b: { date: string | number | Date; }) => new Date(a.date).getTime() - new Date(b.date).getTime());
      setExpenses(fetchedExpenses);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching expenses:", error);
      setLoading(false);
    }
  };

  const options = {
    responsive: true,
    plugins: {
      // legend: { position: 'right' as const },
      // title: { display: true, text: 'Monthly Analysis' },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Date", // X-axis label
          color: '#e66eba',
          font:{
            size: 23,
            weight: 800,
          }
        }
      },
      y: {
        title: {
          display: true,
          text: 'Amount', // X-axis label
          color: '#e66eba',
          font:{
            size: 23,
            weight: 800,
          }
        }
      },
    }
  };

  // Group expenses by date
  const groupedExpenses: { [date: string]: number } = {};
  expenses.forEach((expense) => {
    const date = new Date(expense.date).toDateString();
    groupedExpenses[date] = (groupedExpenses[date] || 0) + expense.amount;
  });

  // Create an array of unique dates
  const labels = Object.keys(groupedExpenses);

  const data = {
    labels,
    datasets: [
      {
        data: labels.map((date) => groupedExpenses[date]),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return <Line options={options} data={data} />;
}