import React from 'react';
import sinon from 'sinon';
import { mount } from 'enzyme';
import { shallow } from 'enzyme';
import { configureStore } from '../../configureStore';
import Editor from './Editor';
import { Select } from './Select';

describe('Editor stateful component', () => {
    const editorProps = {
        isAddTodo: true,
        addCategory: jest.fn(),
        categories: [{category: 'work', color: '#eeeeee'}]
    };

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

    it('call handleAddTodo method when button AddTodo clicked', () => {
        const spy = jest.spyOn(Editor.prototype, 'handleAddTodo');
        const componentInstanse = shallow(<Editor {...editorProps} store={configureStore} />);
        componentInstanse.find('.btn-add').simulate('click');
        expect(spy).toBeCalled();
    });

    it('show Add button when the prop isAddTodo = true', () => {
        expect(component.find('.btn-add').text()).toEqual('Add');;
    });

    it('show Save button instead of Add button if the prop isAddTodo = false', () => {
        component.setProps({isAddTodo: false});
        expect(component.find('.btn-add').text()).toEqual('Save');;
    });
});