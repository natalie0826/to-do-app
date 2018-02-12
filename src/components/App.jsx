import React from 'react';
import { ShowTodoList } from '../containers/ShowTodoList';
import { AddTodo } from '../containers/AddTodo';
import { configureStore } from '../configureStore';
import '../styles/todo.css';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../../node_modules/react-tabs/style/react-tabs.css';

export const App = () => {
    return (
        <div className="container">
            <h3>Todos</h3>
            <AddTodo isAddTodo={true} store={configureStore} categories={configureStore.categories}/>
            <Tabs>
                <TabList>
                    <Tab>All tasks</Tab>
                    <Tab>Categories</Tab>
                </TabList>
            
                <TabPanel>
                    <ShowTodoList flag="list"/>
                </TabPanel>
                <TabPanel>
                    <ShowTodoList flag="categories"/>
                </TabPanel>
            </Tabs>
        </div>
    );
};
