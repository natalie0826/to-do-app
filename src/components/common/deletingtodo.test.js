import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { configureStore } from '../../configureStore';
import { DeletingTodo } from './DeletingTodo';
import { Select } from './Select';

describe('DeletingTodo stateless component', () => {
    const deletingTodoProps = {
        confirm: jest.fn()
    };

    const component = shallow(<DeletingTodo  />);

    it('has two buttons for Yes answer and No answer', () => {
        expect(component.find('button').length).toBe(2);
    });

    it('has button Yes to delete in the div for buttons', () => {
        expect(component.find('.buttons-wrapper').childAt(0).text()).toBe('Yes');
    });

    it('has button No to delete in the div for buttons', () => {
        expect(component.find('.buttons-wrapper').childAt(1).text()).toBe('No');
    });

    it('calls confirm method after clicking any button', () => {
        const callbackConfirm = sinon.spy();
        component.setProps({confirm: callbackConfirm});
        expect(callbackConfirm.called).toBeFalsy();
        component.find('.buttons-wrapper').childAt(0).simulate('click');
        expect(callbackConfirm.called).toBeTruthy();
    });
});