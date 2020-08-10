import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('Test set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('Test remove expense', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([
        expenses[0],
        expenses[2]
    ]);
});

test('Test remove expense when ID not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('Test add expense', () => {
    const newExpense = {
        id: '829',
        description: 'New test expense!',
        amount: 90,
        createdAt: moment().subtract(3, 'years'),
        note: 'My test note'
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense: newExpense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, newExpense]);
});

test('Test edit expense', () => {
    const amount = 99458;
    const note = ' a fdg dsf gsdg34t';
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount: amount,
            note: note
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe(amount);
    expect(state[1].note).toBe(note);
});

test('Test edit expense when ID not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '42',
        updates: {}
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});
