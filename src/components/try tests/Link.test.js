import React from 'react';
import Link from './Link';
import renderer from 'react-test-renderer';

test('Link changes the class when hovered', () => {
    const component = renderer.create(
        <Link page="http://www.facebook.com">Facebook</Link>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree.props.className).toEqual('normal');

    tree.props.onMouseEnter();
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree.props.className).toEqual('hovered');

    tree.props.onMouseLeave();
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree.props.className).toEqual('normal');
});