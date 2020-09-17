import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

test('Test rendering header', () => {
    const wrapper = shallow(<Header startLogout={() => { }} />);
    expect(wrapper).toMatchSnapshot();
});

test('Test logout button click', () => {
    const onClickSpy = jest.fn();
    const wrapper = shallow(<Header startLogout={onClickSpy} />);
    wrapper.find('button').simulate('click', {
        preventDefault: () => {}
    });
    expect(wrapper).toMatchSnapshot();
    expect(onClickSpy).toHaveBeenCalled();
});
