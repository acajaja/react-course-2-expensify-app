import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('Test render default expense form', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('Test render expense form with data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});

test('Test correct error for improper form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('Test set description on input change', () => {
    const newDescription = 'NOXA8 h98yh9oj';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: { value: newDescription }
    });
    expect(wrapper.state('description')).toBe(newDescription);
});

test('Test set note on textarea change', () => {
    const newNote = 'Some lorem ipsum to go.';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').at(0).simulate('change', {
        target: { value: newNote }
    });
    expect(wrapper.state('note')).toBe(newNote);
});

test('Test set amount on valid input', () => {
    const newAmount = '299.51';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value: newAmount }
    });
    expect(wrapper.state('amount')).toBe(newAmount);
});

test('Test set amount on invalid input', () => {
    const newAmount = '9.000';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value: newAmount }
    });
    expect(wrapper.state('amount')).toBe('');
});

test('Test onSubmit prop for valid form submit', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        note: expenses[0].note,
        amount: expenses[0].amount,
        createdAt: expenses[0].createdAt
    });
});

test('Test set new date on date change', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('Test set calendar focus on change', () => {
    const expected = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused: expected});
    expect(wrapper.state('calendarFocused')).toBe(expected);
});
