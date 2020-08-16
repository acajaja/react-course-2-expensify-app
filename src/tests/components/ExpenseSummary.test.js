import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';

test('Test a single expense', () => {
    const wrapper = shallow(<ExpenseSummary expensesCount={1} totalAmount={123} />);
    expect(wrapper).toMatchSnapshot();
});

test('Test multiple expenses', () => {
    const wrapper = shallow(<ExpenseSummary expensesCount={16} totalAmount={1345223} />);
    expect(wrapper).toMatchSnapshot();
});
