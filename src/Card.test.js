import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card.js';
import renderer from 'react-test-renderer';

describe('Card component test suite.', () => {
    it('Renders without crashing.', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<Card />)
            .toJSON()
        expect(tree).toMatchSnapshot();
    });

});