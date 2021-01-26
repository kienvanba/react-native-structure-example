import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Button from '../Button';

describe('Button', () => {
    test('renders correctly', () => {
        const wrapper = shallow(<Button />);
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
});
