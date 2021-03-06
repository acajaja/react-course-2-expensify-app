import {
    startAddExpense, addExpense,
    editExpense, removeExpense,
    setExpenses, startSetExpenses,
    startRemoveExpense, startEditExpense
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

const uid = 'myTestUi1234';
const defaultAuthState = { auth: { uid }};
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expenseData = {};

    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expenseData[id] = { description, note, amount, createdAt };
    });

    database.ref(`users/${uid}/expenses`)
        .set(expenseData)
        .then(() => {
            done();
        });
});

test('Test removeExpense action', () => {
    const result = removeExpense({ id: 'Abc123' });
    expect(result).toEqual({
        id: 'Abc123',
        type: 'REMOVE_EXPENSE'
    });
});

test('Test startRemoveExpense', (done) => {
    const mockStore = createMockStore(defaultAuthState);
    const idToRemove = { id: expenses[1].id };

    mockStore.dispatch(startRemoveExpense(idToRemove))
        .then(() => {
            const actions = mockStore.getActions();

            expect(actions[0]).toEqual({
                type: 'REMOVE_EXPENSE',
                id: idToRemove.id
            });

            return database.ref(`expenses/${idToRemove.id}`)
                .once('value');
        })
        .then((snapshot) => {
            expect(snapshot.val()).toBe(null);
            done();
        });
});

test('Test editExpense action', () => {
    const newData = { note: 'Test note one.', amount: 9400 };
    const actionObject = editExpense('id123', newData);

    expect(actionObject).toEqual({ id: 'id123', type: 'EDIT_EXPENSE', updates: newData});
});

test('Test startEditExpense action', (done) => {
    const mockStore = createMockStore(defaultAuthState);
    const idToUpdate = expenses[0].id;
    const updates = { description: 'Testing the update', amount: 9136 };

    mockStore.dispatch(startEditExpense(idToUpdate, updates))
        .then(() => {
            const actions = mockStore.getActions();

            expect(actions[0]).toEqual({
                type: 'EDIT_EXPENSE',
                id: idToUpdate,
                updates
            });

            return database.ref(
                    `users/${uid}/expenses/${idToUpdate}`
                )
                .once('value');
        })
        .then((snapshot) => {
            const expected = {
                note: expenses[0].note,
                createdAt: expenses[0].createdAt,
                ...updates
            };

            expect(snapshot.val()).toEqual(expected);
            done();
        });
});

test('Test addExpense with user data', () => {
    const actionObject = addExpense(expenses[2]);

    expect(actionObject).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});

test('Test adding expense to DB & store', (done) => {
    const mockStore = createMockStore(defaultAuthState);
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

            return database.ref(
                    `users/${uid}/expenses/${dispatchedActions[0].expense.id}`
                )
                .once('value');
        })
        .then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseData);
            done();
        });
});

test('Test adding expense with defaults to DB & store', (done) => {
    const mockStore = createMockStore(defaultAuthState);
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

            return database.ref(
                    `users/${uid}/expenses/${dispatchedActions[0].expense.id}`
                )
                .once('value');
        })
        .then((snapshot) => {
            expect(snapshot.val()).toEqual(expectedData);
            done();
        });
});

test('Test setExpenses with fixture data', () => {
    const action = setExpenses(expenses);

    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    });
});

test('Test startSetExpenses with DB data', (done) => {
    const mockStore = createMockStore(defaultAuthState);

    mockStore.dispatch(startSetExpenses())
        .then(() => {
            const actions = mockStore.getActions();
            expect(actions[0]).toEqual({
                type: 'SET_EXPENSES',
                expenses
            });
            done();
        });
});
