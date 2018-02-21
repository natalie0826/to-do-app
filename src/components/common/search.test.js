import React from 'react';
import { shallow } from 'enzyme';
import { configureStore } from '../../configureStore';
import { Search } from './Search';

describe('Search functional component', () => {
    const searchProps = {
        updateSearch: jest.fn(),
        value: 'Search...',
        isVisible: false
    };

    const component = shallow(<Search store={configureStore} />);

    it('renders Search component', () => {
        expect(component.length).toBe(1);
    });

    it('nothing to show if isVisible: false', () => {
        component.setProps(searchProps);
        expect(component.find('input').length).toBe(0);
    });

    it('show input if isVisible: true', () => {
        component.setProps({isVisible: true});
        expect(component.find('input').length).toBe(1);
    });

    it('placeholder to be Search...', () => {
        expect(component.find('input').props().placeholder).toBe('Search. . .');
    });

    it('prop onChange is a function', () => {
        expect(component.find('input').props().onChange).toEqual(searchProps.updateSearch);
    });
});