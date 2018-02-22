import React from 'react';
import '../../node_modules/react-tabs/style/react-tabs.css';

import { withFetching } from '../containers/HOCs/withFetching';
import { ShowTodoApp } from '../containers/ShowTodoApp';
import '../styles/todo.css';

export const App = (props) => {
    return (
        <div className="container">
            <ShowTodoApp />
        </div>
    );
};
