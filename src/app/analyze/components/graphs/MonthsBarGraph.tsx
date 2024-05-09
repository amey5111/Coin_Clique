import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip } from 'chart.js';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Expense } from '@/app/addexpenses/types/types';
import YearPicker from '../YearPicker'; // Import the YearPicker component
import { MonthsBarGraphPropTypes } from '../../types/propTypes';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const MonthsBarGraph: React.FC <MonthsBarGraphPropTypes> = ({isMobile}) => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    fetchExpenses();
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

  const MonthlyExpenseCalculator = (expenses: Expense[]) => {
    const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    let monthlyExpenses = [];
    const monthlyTotal = [];
    let totalExpense = 0;
    for (let i = 0; i < 12; i++) {
      monthlyExpenses = expenses
        .filter(
          (expense: { date: string }) =>
            expense.date.substring(0, 4) === selectedYear.toString() &&
            expense.date.substring(5, 7) === months[i]
        )
        .map(expense => expense.amount);
      totalExpense = monthlyExpenses.reduce((total, value) => total + value, 0);
      monthlyTotal.push(totalExpense);
    }
    return monthlyTotal;
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Monthly Analysis',
      },
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
        title: {
          display: true,
          text: 'Month',
          color: '#e66eba',
          font: {
            size: isMobile? 12 : 23,
            weight: 800,
          },
        },
      },
      y: {
        stacked: true,
        grid: {
          display: false,
        },
        title: {
          display: true,
          text: 'Total Amount',
          color: '#e66eba',
          font: {
            size: isMobile? 12 : 23,
            weight: 800,
          },
        },
      },
    },
  };

  const labels = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  const data = {
    labels,
    datasets: [
      {
        label: 'Expenses',
        data: MonthlyExpenseCalculator(expenses),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <div>
      <YearPicker onYearChange={setSelectedYear} />
      <Bar options={options} data={data} height={isMobile ? 250 : ""} />
    </div>
  );
}
export default MonthsBarGraph;