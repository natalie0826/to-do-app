import React from 'react';
import { shallow, mount } from 'enzyme';
import { createStore } from 'redux';
import { App } from '../components/App';
import toJson from 'enzyme-to-json';
import { shallowToJson } from 'enzyme-to-json';
import { Provider } from 'react-redux';

// components
import { EditTodo } from '../containers/EditTodo';
import { AddTodo } from '../containers/AddTodo';

import { todoApp } from '../reducers/index';
import {addTodo} from "../actions";


describe('Application', () => {
   /* describe('App component', () => {
        const wrapper = shallow(<App/>);

        it('renders title', () => {
            const welcome = <h3>Todos</h3>;
            // expect(wrapper.contains(welcome)).to.equal(true);
            // expect(wrapper.contains(welcome)).toEqual(true);
            expect(wrapper).toContainReact(welcome);
        });
    });

    describe('render todo', () => {
        const store = createStore(
            todoApp
        );

        it('should render correctly', () => {
            const output = shallow(
                <Provider store={store}>
                    <EditTodo
                        key="1"
                        id={2}
                        text="aaaa"
                        completed={false}
                        deleted={false}
                    />
                </Provider>
            );
            expect(shallowToJson(output)).toMatchSnapshot();
        });


        // it('test button click', () => {
        //     const wrapper = mount(
        //         <Provider store={store}>
        //             <AddTodo />
        //         </Provider>
        //     );
        //     console.log('WRAPPER', wrapper);
        //     wrapper.find('button').simulate('click');
        // });
    });
*/

    function setup() {
        const props = {
            addTodo: jest.fn()
        };
        const store = createStore(
            todoApp
        );

        const enzymeWrapper = mount(
            <Provider store={store}>
                <AddTodo {...props}/>
            </Provider>
        );

        return {
            props,
            enzymeWrapper
        };
    }

    describe('components', () => {
        describe('AddBlock', () => {
            it('should render AddBlock', () => {
                const {enzymeWrapper} = setup();
                expect(enzymeWrapper.find('button').hasClass('btn-add')).toBe(true);
                const addTodoInput = enzymeWrapper.find('input').props();
                expect(addTodoInput.placeholder).toEqual('Task');
            });

            it('should call addTodo if length of text is greater than 0', () => {
                const {enzymeWrapper, props} = setup();

                const todoButton = enzymeWrapper.find('button');
                // todoButton.props().onClick('1');
                // console.log('AAA', props.onAddClick.mock);
                // expect(props.onAddClick.mock.calls.length).toBe(0);

                todoButton.props().onClick('1');
                expect(props.addTodo.mock.calls.length).toBe(1);
            });
        });
    });
});