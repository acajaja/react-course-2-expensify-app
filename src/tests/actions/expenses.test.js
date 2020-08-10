import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Test removeExpense action', () => {
    const result = removeExpense({ id: 'Abc123' });
    expect(result).toEqual({ id: 'Abc123', type: 'REMOVE_EXPENSE'});
});

test('Test editExpense action', () => {
    const newData = { note: 'Test note one.', amount: 9400 };
    const actionObject = editExpense('id123', newData);

    expect(actionObject).toEqual({ id: 'id123', type: 'EDIT_EXPENSE', updates: newData});
});

test('Test addExpense with user data', () => {
    const expenseData = {
        description: 'Rent',
        amount: 109723,
        createdAt: 1000,
        note: 'Last months rent for next month.'
    };
    const actionObject = addExpense(expenseData);

    expect(actionObject).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('Test addExpense with default data', () => {
    const actionObject = addExpense();

    expect(actionObject).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            amount: 0,
            createdAt: 0,
            note: '',
            description: ''
        }
    });
});
