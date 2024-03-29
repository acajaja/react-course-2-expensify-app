import uuid from 'uuid';
import database from '../firebase/firebase';
import expenses from '../tests/fixtures/expenses';

export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        // Destructure expenseData overwriting default values
        // description, note, etc are scoped to the function
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;

        const expense = { description, note, amount, createdAt };

        return database.ref(
                `users/${uid}/expenses`
            )
            .push(expense)
            .then((ref) => {
                dispatch(addExpense({
                    id: ref.key,
                    ...expense
                }));
            });
    };
};

export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const startRemoveExpense = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(
                `users/${uid}/expenses/${id}`
            )
            .remove()
            .then(() => {
                dispatch(removeExpense({ id }));
            });
    };
};

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(
                `users/${uid}/expenses/${id}`
            )
            .update(updates)
            .then(() => {
                dispatch(editExpense(id, updates));
            });
    };
};

export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

/**
 * Grab expenses from DB & set for display
 */
export const startSetExpenses = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        // Grab expenses from DB in object structure & convert to an array
        // Dispatch setExpenses
        return database.ref(
                `users/${uid}/expenses`
            )
            .once('value')
            .then((snapshot) => {
                const expenses = [];

                snapshot.forEach((expense) => {
                    expenses.push({
                        id: expense.key,
                        ...expense.val()
                    });
                });

                dispatch(setExpenses(expenses));
            });
    };
};
