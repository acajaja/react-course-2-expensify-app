import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addExpense = (
    { description = '', note = '', amount = 0, createdAt = 0 } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const setTextFilter = (text) => ({
    type: 'SET_TEXT_FILTER',
    text
});

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    // updates expense by combine the two objects, overwriting
                    // with action.updates
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    // return expense;
                }
            });
        default:
            return state;
    }
};

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
        };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    }
};

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.info(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 1300, createdAt: -21000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 500, createdAt: -1000 }));

console.info('----------------');

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 21847 }));

// store.dispatch(setTextFilter('coffee'));
// store.dispatch(setTextFilter(''));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(1001));
// store.dispatch(setStartDate());

// store.dispatch(setEndDate(1250));
// store.dispatch(setEndDate());

// const demoState = {
//     expenses: [{
//         id: "24534",
//         description: "ioj Ojoij oIJ",
//         note: "oijo ijoi jio",
//         amount: 9275,
//         createdAt: 0
//     }],
//     filters: {
//         text: 'rent',
//         sortBy: 'amount', // Date or amount
//         startDate: undefined,
//         endDate: undefined
//     }
// };

