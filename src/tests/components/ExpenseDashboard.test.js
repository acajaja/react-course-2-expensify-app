import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboard from '../../components/ExpenseDashboard';

test('Test the dasboard page', () => {
    const wrapper = shallow(<ExpenseDashboard />);
    expect(wrapper).toMatchSnapshot();
});
