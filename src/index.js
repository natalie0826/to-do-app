import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './components/App';
import { configureStore } from './configureStore';

render(
    <Provider store={configureStore}>
        <App store={configureStore} />
    </Provider>,
    document.getElementById('root')
);
