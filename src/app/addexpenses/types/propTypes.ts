import { Expense } from "./types";

export interface ExpenseFormProps {
    onSubmit: (expense: Expense) => void;
  }
  