import "./NewExpense.css";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
const [isNewForm, setIsNewForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      date: new Date(enteredExpenseData.date),
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsNewForm(prevState => !prevState);
};
const editHandler = () => {
  setIsNewForm(prevState => !prevState);
}

  return (
    <div className="new-expense">
      {!isNewForm && <button onClick={editHandler}>Add New Expense</button>}
      {isNewForm && <ExpenseForm onCancel={editHandler} onSaveExpenseData={saveExpenseDataHandler} />}
    </div>
  );
};

export default NewExpense;
