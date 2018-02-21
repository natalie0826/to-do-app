import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import { configureStore } from '../../configureStore';
import CategoriesModal from './CategoriesModal';
import { CirclePicker } from 'react-color';
import { CategoriesList } from './CategoriesList';

describe('CategoriesModal stateful component', () => {
    const categoriesModalProps = {
        categories: [
                { category: 'one', color: 'red' },
                { category: 'two', color: 'red' },
                { category: 'three', color: 'red' }
        ],
        addCategory: jest.fn(),
        store: configureStore
    }

    const component = shallow(<CategoriesModal {...categoriesModalProps} />);

    it('contains CaterogiesList component', () => {
        expect(component.find(CategoriesList)).toBeTruthy();
    });

    it('contains CirclePicker component', () => {
        const componentInstanse = mount(<CategoriesModal {...categoriesModalProps} />);
        const spy = jest.spyOn(componentInstanse.instance(), 'handleAddCategory');
        componentInstanse.find('.btn-add').simulate('click');
        expect(spy).toBeCalled();

        // const callbackAddCategory = sinon.spy();
        // component.setState({addCategory: callbackAddCategory});
        
        // expect(callbackAddCategory).toBeCalled();
        // expect(component.find(CirclePicker)).toBeTruthy();
    });
});