import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

test('Test render default login page', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
});

test('Test login button click', () => {
    const onClickSpy = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={onClickSpy} />);
    wrapper.find('button').simulate('click', {
        preventDefault: () => {}
    });
    expect(wrapper).toMatchSnapshot();
    expect(onClickSpy).toHaveBeenCalled();
});
