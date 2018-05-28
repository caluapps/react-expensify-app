import React from 'react';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../actions/action-expenses';
import ExpenseForm from './component-ExpenseForm';

const EditExpensePage = (props) => {
  // console.log(props);
  return (
    <div>
      {/* Editing the expense with id of {props.match.params.id} */}
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
          // Dispatch the action to edit the expense
          props.dispatch(editExpense(props.expense.id, expense));
          // Redirect to the dashboard
          props.history.push('/');

          console.log('updated', expense);
        }}
      />
      <button onClick={() => {
        // console.log('expense', props.expense);
        console.log('id', props.expense.id);
        props.dispatch(removeExpense({ id: props.expense.id }));
        props.history.push('/');
      }}>
        Remove
      </button>
    </div>
  )
};

// Remove expense via dispatch and then redirect to dashboard

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditExpensePage);
