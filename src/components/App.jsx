import React from 'react';
import { ShowTodoList } from '../containers/ShowTodoList';
import { AddTodo } from '../containers/AddTodo';
import FilterBlock from './layout blocks/FilterBlock';
import { store } from '../store';
import '../styles/todo.css';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../../node_modules/react-tabs/style/react-tabs.css';

export const App = () => {
    return (
        <div className="container">
            <h3>Todos</h3>
            <AddTodo isAddBlock={true} store={store} categories={store.categories}/>
            <Tabs>
                <TabList>
                    <Tab>All tasks</Tab>
                    <Tab>Categories</Tab>
                </TabList>
            
                <TabPanel>
                    <FilterBlock />
                    <ShowTodoList flag="list"/>
                </TabPanel>
                <TabPanel>
                    <ShowTodoList flag="categories"/>
                </TabPanel>
            </Tabs>
        </div>
    );
};
