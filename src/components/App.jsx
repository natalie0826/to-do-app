import React from 'react';
import { ShowTodoList } from '../containers/ShowTodoList';
import { FetchAndDisplayData } from '../containers/DataHoc';
import { AddTodo } from '../containers/AddTodo';
import { configureStore } from '../configureStore';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../../node_modules/react-tabs/style/react-tabs.css';

import { AddCategory } from './common/AddCategory';
import '../styles/todo.css';

export const App = () => {
    return (
        <div className="container">
            <AddCategory store={configureStore} categories={configureStore.categories} />
            <h3>Todos</h3>
            <AddTodo isAddTodo={true} categories={configureStore.categories}/>

            <FetchAndDisplayData />
            
            {/* <Tabs>
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
            </Tabs> */}
        </div>
    );
};
