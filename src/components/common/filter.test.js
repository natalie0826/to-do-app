import React from 'react';
import { mount } from 'enzyme';
import { shallow } from 'enzyme';
import { configureStore } from '../../configureStore';
import { FilterLink } from '../../containers/FilterLink';
import ToggleButton from 'react-toggle-button';

describe('Filter stateful component', () => {
    const component = mount(<FilterLink store={configureStore} />);

    it('renders Filter component', () => {
        expect(component.length).toBe(1);
    });

    it('render ToggleButton', () => {
        expect(component.find(ToggleButton).props().value).toBe(true);
    });

    it('checks state value', () => {
        const componentFilter = shallow(<FilterLink store={configureStore} />).dive();
        componentFilter.setState({value: true});
        expect(componentFilter.state().value).toBe(true);
    });
});