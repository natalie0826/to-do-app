import React from 'react';
import sinon from 'sinon';
import { mount } from 'enzyme';
import { shallow } from 'enzyme';
import { configureStore } from '../../configureStore';
import Editor from './Editor';
import { Select } from './Select';

describe('Editor', () => {
    const editorProps = {
        isAddTodo: true,
        addCategory: jest.fn(),
        categories: [{category: 'work', color: '#eeeeee'}]
    }

    const component = mount(<Editor {...editorProps} store={configureStore} />);

    it(`has 3 buttons for 'add category', 'edit/add', 'clear fields'`, () => {
        expect(component.find('button').length).toBe(3);
    });

    it('contains Select stateless component', () => {
        expect(component.contains(Select)).toBe(true);
    });

    it('passes to Select prop specific value', () => {
        component.setState({category: 'work'});
        expect(component.find(Select).at(0).props().selectedValue).toEqual('work');
    });

    it('contains input for adding todo in the first place', () => {
        expect(component.find('div').childAt(0).type()).toEqual('input');
    });
});