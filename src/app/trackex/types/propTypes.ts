import { Expense } from "./types";

export interface ExpenseFormProps {
    onSubmit: (expense: Expense) => void;
  }

export interface ExpenseTableHeaderProps {
  fetchExpenses: () => Promise<void>;
  expenses: Expense[]
}

export interface SortOptionsDropdownProps {
  expenses: Expense[],
  onOptionClick: () => void;
}