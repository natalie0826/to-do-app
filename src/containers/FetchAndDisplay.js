import React from 'react';
import { connect } from 'react-redux';

import { fetchTodos } from '../actions/todos';
import { fetchCategories } from '../actions/categories';
import { Loading } from '../components/Loading';
import { ShowTodoList } from './ShowTodoList';

const WithFetching = (todosUrl, categoriesUrl) => ComposedComponent =>
    class WithFetching extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                loading: false,
                loaded: false,
                todos: [],
                categories: [],
            };
        }

        componentDidMount() {
            this.setState({loading: true});
            this.props.fetchCategories(categoriesUrl)
                .then(categories => this.setState({
                    loaded: true,
                    loading: false
                }));
            this.props.fetchTodos(todosUrl)
                .then(todos => this.setState({
                    loaded: true,
                    loading: false
                }));
        }

        render() {
            return (
                <div className="data-component">
                    {this.state.loading ? <Loading loading={this.state.loading} /> : <ComposedComponent />}
                </div>
            );
        }
    }

const mapDispatchToProps = (dispatch, todosUrl, categoriesUrl) => ({
    fetchTodos: (url) => dispatch(fetchTodos(url)),
    fetchCategories: (url) => dispatch(fetchCategories(url)),
});

export const FetchAndDisplay = connect(
    null,
    mapDispatchToProps
)(WithFetching('https://api.myjson.com/bins/aufxd', 'https://api.myjson.com/bins/wqrmt')(ShowTodoList));
