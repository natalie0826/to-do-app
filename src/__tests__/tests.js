import React from 'react';
import { shallow } from 'enzyme';

// components
import App from '../components/App';

// reducers
import todosReducer from '../reducers/todos';

describe('App component', () => {
    const wrapper = shallow(<App />);

    it('renders title', () => {
        const welcome = <h3>Todos</h3>;
        // expect(wrapper.contains(welcome)).to.equal(true);
        // expect(wrapper.contains(welcome)).toEqual(true);
        expect(wrapper).toContainReact(welcome);
    });
});

describe('Test events', () => {
    it('should render new todo in the todo list', () => {
        const wrapper = mount(
            <Todo todo={}
        )
    })
});
