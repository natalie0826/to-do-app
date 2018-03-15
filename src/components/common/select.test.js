import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { configureStore } from '../../configureStore';
import { Select } from './Select';

describe('Select functional component', () => {
    const selectProps = {
        options: [
                { category: 'one' },
                { category: 'two' },
                { category: 'three' }
        ],
        selectedValue: 'one',
        changeSelection: jest.fn()
    }

    const component = shallow(<Select {...selectProps} />);

    it('has select tag', () => {
        expect(component.find('select').length).toBe(1);
    });

    it('expects selectedValue to be equal to the props value', () => {
        expect(component.find('select').props().value).toBe(selectProps.selectedValue);
    });

    it('count of options should be egual with options.length (where options is an array passed as a prop)', () => {
        expect(component.find('option').length).toBe(selectProps.options.length);
    });

    it('calls props method changeSelection after changing an option', () => {
        const callbackChange = sinon.spy();
        component.setProps({changeSelection: callbackChange});
        expect(callbackChange.called).toBeFalsy();
        component.find('select').props().onChange({ target: {value: 'two'}});
        expect(callbackChange.called).toBeTruthy();
    });
});