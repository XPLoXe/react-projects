import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";

const NewExpense = (props) => {
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsNewExpense(false);
  };

  const [isNewExpense, setIsNewExpense] = useState(false);

  const addNewExpenseHandler = () => {
    setIsNewExpense(true);
  };

  const removeNewExpenseHandler = () => {
    setIsNewExpense(false);
  };

  return (
    <div className="new-expense">
      {isNewExpense && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancel={removeNewExpenseHandler}
        ></ExpenseForm>
      )}
      {!isNewExpense && (
        <button className="new-expense" onClick={addNewExpenseHandler}>
          Add New Expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;
