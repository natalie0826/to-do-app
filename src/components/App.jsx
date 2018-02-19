import React from 'react';
import '../../node_modules/react-tabs/style/react-tabs.css';

import { withFetching } from '../containers/withFetching';
import { urls } from '../constants/constantsUrls';
import { ShowTodoApp } from '../containers/ShowTodoApp';
import '../styles/todo.css';

export const App = (props) => {
    const TodoAppWithFetch = withFetching([urls.todos, urls.categories])(ShowTodoApp);
    
    return (
        <div className="container">
            <TodoAppWithFetch />
        </div>
    );
};
