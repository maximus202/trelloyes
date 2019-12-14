import React from 'react';
import ReactDOM from 'react-dom';
import List from './List.js';
import renderer from 'react-test-renderer';

describe('Test suite for List component.', () => {
    it('Smoke test. Renders the component without crashing.', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('Snapshot test. Renders the component in the UI.', () => {
        const tree = renderer
            .Create(<List />)
            .toJSON()
        expect(tree).toMatchSnapshot();
    });
});
