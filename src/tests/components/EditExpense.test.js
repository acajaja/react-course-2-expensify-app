import React from 'react';
import { shallow } from 'enzyme';
import { EditExpense } from '../../components/EditExpense';
import expenses from '../fixtures/expenses';

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <EditExpense
            editExpense={editExpense}
            removeExpense={removeExpense}
            history={history}
            expense={expenses[1]}
        />
    );
});

test('Test render EditExpense', () => {
     expect(wrapper).toMatchSnapshot();
});

test('Test onSubmit', () => {
    const updates = { description: 'Sex toys' };
    wrapper.find('ExpenseForm').prop('onSubmit')(updates);

    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, updates);
});

test('Test remove expense', () => {
    wrapper.find('button').simulate('click');

    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({ id: expenses[1].id });
});
