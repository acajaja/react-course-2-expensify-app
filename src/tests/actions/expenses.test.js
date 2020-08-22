import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

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
    const actionObject = addExpense(expenses[2]);

    expect(actionObject).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});

test('Test adding expense to DB & store', (done) => {
    const mockStore = createMockStore({});
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'Great mouse!',
        createdAt: 1000
    };

    mockStore.dispatch(startAddExpense(expenseData))
        .then(() => {
            const dispatchedActions = mockStore.getActions();
            expect(dispatchedActions[0]).toEqual({
                type: 'ADD_EXPENSE',
                expense: {
                    id: expect.any(String),
                    ...expenseData
                }
            });

            return database.ref(`expenses/${dispatchedActions[0].expense.id}`)
                .once('value');
        })
        .then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseData);
            done();
        });
});

test('Test adding expense with defaults to DB & store', (done) => {
    const mockStore = createMockStore({});
    const expectedData = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    };

    mockStore.dispatch(startAddExpense())
        .then(() => {
            const dispatchedActions = mockStore.getActions();
            expect(dispatchedActions[0]).toEqual({
                type: 'ADD_EXPENSE',
                expense: {
                    id: expect.any(String),
                    ...expectedData
                }
            });

            return database.ref(`expenses/${dispatchedActions[0].expense.id}`)
                .once('value');
        })
        .then((snapshot) => {
            expect(snapshot.val()).toEqual(expectedData);
            done();
        });
});

// test('Test addExpense with default data', () => {
//     const actionObject = addExpense();

//     expect(actionObject).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             id: expect.any(String),
//             amount: 0,
//             createdAt: 0,
//             note: '',
//             description: ''
//         }
//     });
// });
