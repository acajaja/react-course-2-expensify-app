/**
 * Calculate the total dollar amount from the given array of expenses.
 *
 * @param expenses array
 * @returns Integer Total amount or 0 if input is empty
 */
export default (expenses) => {
    return expenses.reduce((accumulator, currentValue) => accumulator + currentValue.amount, 0);
};
