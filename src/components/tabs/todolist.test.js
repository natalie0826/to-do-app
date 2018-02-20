import React from 'react';
import {mount} from 'enzyme';
import {shallow} from 'enzyme';
import {configureStore} from '../../configureStore';
import thunk from 'redux-thunk';
import TodoList from './TodoList';
import TodoWrap from './TodoWrap';

const todos = [
    {
        "id": "1",
        "text": "read about fetch",
        "description": "something",
        "category": "work",
        "completed": false,
        "deleted": false
    }, {
        "id": "2",
        "text": "clean the room",
        "description": "something",
        "category": "home",
        "completed": false,
        "deleted": false
    }, {
        "id": "3",
        "text": "buy new book",
        "description": "something",
        "category": "hobby",
        "completed": false,
        "deleted": false
    }, {
        "id": "4",
        "text": "call my mentor",
        "description": "something",
        "category": "work",
        "completed": true,
        "deleted": false
    }, {
        "id": "5",
        "text": "edit todos application",
        "description": "something",
        "category": "work",
        "completed": false,
        "deleted": true
    }, {
        "id": "6",
        "text": "write a book's review",
        "description": "something",
        "category": "hobby",
        "completed": true,
        "deleted": true
    }
];

const todoListProps = {
    todos: todos,
    categories: [
        {
            "category": "work",
            "color": "#FBD6AA"
        }, {
            "category": "home",
            "color": "#FB77FF"
        }, {
            "category": "hobby",
            "color": "#F33AAA"
        }
    ],
    toggleTodo: jest.fn(),
    deleteTodo: jest.fn(),
    editTodo: jest.fn(),
    addCategory: jest.fn()
};

describe('TodoList', () => {

    const component = shallow(<TodoList store={configureStore} {...todoListProps} />);

    it('renders children count equal to todos.length', () => {
        expect(component.find(TodoWrap).length).toBe(todos.length);
    })
});