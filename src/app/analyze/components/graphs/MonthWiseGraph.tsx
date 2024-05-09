import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip } from 'chart.js';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Expense } from '@/app/addexpenses/types/types';
import YearPicker from '../YearPicker'; // Import the YearPicker component
import MonthDropdown from '../MonthDropdown';
import { MonthWiseGraphPropTypes } from '../../types/propTypes';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

interface GraphExpense {
  date: string;
  amount: number;
}

const MonthWiseGraph: React.FC <MonthWiseGraphPropTypes> = ({isMobile}) => {
  const d = new Date();
  const [expenses, setExpenses] = useState<GraphExpense[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(d.getMonth());

  useEffect(() => {
    fetchExpenses();
  }, [selectedMonth, selectedYear]);

  const handleMonthChange = (month: number) => {
    setSelectedMonth(month);
    // You can perform additional logic here with the selected month value
  };


  const fetchExpenses = async () => {
    try {
      const expenseResponse = await axios.get("/api/userExpenses/fetchExpenses");
      const fetchedExpenses = expenseResponse?.data.data?.expenses;
      const filteredExpenses = fetchedExpenses.filter((expense: { date: any }) => {
        const expenseDate = new Date(expense.date);
        return expenseDate.getMonth() === selectedMonth && expenseDate.getFullYear() === selectedYear;
      });

      // Group expenses by date and sum the amounts
      const groupedExpenses = groupExpensesByDate(filteredExpenses);

      // Convert the grouped expenses object to an array of objects
      const expenseData = Object.entries(groupedExpenses).map(([date, amount]) => ({ date, amount }));
      setExpenses(expenseData);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching expenses:", error);
      setLoading(false);
    }
  };

  const groupExpensesByDate = (expenses: Expense[]) => {
    const groupedExpenses: { [date: string]: number } = {};
    expenses.forEach((expense) => {
      const date = expense.date;
      if (groupedExpenses[date]) {
        groupedExpenses[date] += expense.amount;
      } else {
        groupedExpenses[date] = expense.amount;
      }
    });
    return groupedExpenses;
  };

  const getMonthName = (selectedMonth: number) => {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    return months[selectedMonth];
  }

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
          text: `Days of ${getMonthName(selectedMonth)}`,
          color: '#e66eba',
          font: {
            size: isMobile? 10 : 23,
            weight: 800,
          }
        }
      },
      y: {
        title: {
          display: true,
          text: 'Amount',
          color: '#e66eba',
          font: {
            size: isMobile? 10 :23,
            weight: 800,
          }
        }
      },
    }
  };

  const sortedExpenses = expenses.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA.getTime() - dateB.getTime();
  });

  const labels = sortedExpenses.map((expense) => new Date(expense.date).getDate());
  const data = {
    labels,
    datasets: [
      {
        data: sortedExpenses.map((expense) => expense.amount),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <div>
      <div className=' w-fit flex justify-between  ml-auto'>
        <MonthDropdown onMonthChange={handleMonthChange} />
        <YearPicker onYearChange={setSelectedYear}/>
      </div>
      <Line options={options} data={data} height={isMobile ? 250 : ""} />
    </div>
  );
}

export default MonthWiseGraph;