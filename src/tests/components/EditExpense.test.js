import React from 'react';
import { shallow } from 'enzyme';
import { EditExpense } from '../../components/EditExpense';
import expenses from '../fixtures/expenses';

let editExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <EditExpense
            editExpense={editExpense}
            startRemoveExpense={startRemoveExpense}
            history={history}
            expense={expenses[1]}
        />
    );
});

test('Test render EditExpense', () => {
     expect(wrapper).toMatchSnapshot();
});

test('Test onSubmit', () => {
    const updates = { description: 'Baby Formula' };
    wrapper.find('ExpenseForm').prop('onSubmit')(updates);

    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, updates);
});

test('Test remove expense', () => {
    wrapper.find('button').simulate('click');

    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expenses[1].id });
});
