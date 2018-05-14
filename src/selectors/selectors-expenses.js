// Get visible expenses
export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    // figure out if expense.description has the text variable string inside of it
    // includes
    // convert both strings to lower case

    /* my solution ist falsch, weil es sonst ein false zurück geben würde
    expense.description && text ? expense.description.toLowerCase().includes(text.toLowerCase()) : false; */

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    }

    // sortBy -> amount
    // put the one with a greater amount first
    //
    else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};
