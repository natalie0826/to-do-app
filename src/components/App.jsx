import React from 'react';
import '../../node_modules/react-tabs/style/react-tabs.css';

import { configureStore } from '../configureStore';
import { withFetching } from '../containers/withFetching';
import { ButtonToOpenModal } from './common/ButtonToOpenModal';
import { urls } from '../constants/constantsUrls';
import '../styles/todo.css';

import { ShowTodoApp } from '../containers/ShowTodoApp';

export const App = (props) => {
    const TodoAppWithFetch = withFetching(urls.todos)(ShowTodoApp);
    
    return (
        <div className="container">
            <ButtonToOpenModal store={configureStore} />
            <h3>Todos</h3>
            <TodoAppWithFetch />
        </div>
    );
};
