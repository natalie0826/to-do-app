import React from 'react';

import { FetchAndDisplay } from '../containers/FetchAndDisplay';
import { configureStore } from '../configureStore';
import '../../node_modules/react-tabs/style/react-tabs.css';

import { AddCategory } from './common/AddCategory';
import '../styles/todo.css';

export const App = () => {
    return (
        <div className="container">
            <AddCategory store={configureStore} categories={configureStore.categories} />
            <h3>Todos</h3>
            <FetchAndDisplay />
        </div>
    );
};
