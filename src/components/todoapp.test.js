import React from 'react';
import { mount } from 'enzyme';
import { shallow } from 'enzyme';
import { configureStore } from '../configureStore';
import { ShowTodoApp } from '../containers/ShowTodoApp';

describe('TodoApp', () => {
    const component = mount(<ShowTodoApp store={configureStore} />);

    it('has title Todos', () => {
        expect(component.contains(<h3>Todos</h3>)).toEqual(true);
    })
});