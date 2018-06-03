export default (expenses) => {
  /* Andrew Solution
  return expenses
    .map((expenses) => expense.amount)
    .reduce((sum, val) => sum + val, 0); */

  /* My Solution
  const totalAmount = expenses.reduce(
    (acc, currVal) => acc + currVal.amount, 0
  ); */
  /*
  const expensesArr = expenses.map((expenses) => expenses.amount);
  const totalAmount = expensesArr.reduce((sum, val) => sum + val, 0); */

  // console.log('props', props);
  // console.log('this.props', this.props);

  return {
    'expenseCount': expenses.map((expenses) => expenses.amount).length,
    'expensesTotal': expenses
                    .map((expenses) => expenses.amount)
                    .reduce((sum, val) => sum + val, 0)
  };
};
