import React from 'react';
import { shallow } from 'enzyme';

import CheckboxWithLabel from './CheckboxWithLabel';

describe('CheckboxWithLabel', () => {
    const component = shallow(
        <CheckboxWithLabel labelOn="On" labelOff="Off" />
    );

    it('defaults to Off label', () => {
        expect(component.find('label').props().children).toEqual('Off');
    });

    it('change to On label after checkbox checked', () => {
        component.find('input').simulate('change');
        expect(component.find('label').props().children).toEqual('On');
    });

    it('click button to Off label', () => {
        component.find('button').simulate('click');
        expect(component.find('label').props().children).toEqual('Off');
    });

    it('click button to On label', () => {
        component.find('button').simulate('click');
        expect(component.find('label').props().children).toEqual('On');
    });
});