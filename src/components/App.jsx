import React from 'react';
import '../../node_modules/react-tabs/style/react-tabs.css';

import { ShowTodoApp } from '../containers/ShowTodoApp';
import '../styles/todo.css';

export const App = () => {
    return (
        <div className="container">
            <ShowTodoApp />
        </div>
    );
};
