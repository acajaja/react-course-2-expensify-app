import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Header from '../../components/Header';

test('Test rendering header', () => {
    const wrapper = shallow(<Header />);
    expect(toJSON(wrapper)).toMatchSnapshot();

    // Enzyme shallow wrapper
    // expect(wrapper.find('h1').text()).toBe('Expensify');
    // React shallow renderer
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});
