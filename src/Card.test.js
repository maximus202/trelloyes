import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card.js';

describe('Card component', () => {
    it('Renders without crashing.', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

});