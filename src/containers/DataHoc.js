import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { fetchTodos } from '../actions/actions';
import { ShowTodoList } from './ShowTodoList';

const DataHoc = endpoint => ComposedComponent =>
    class DataHoc extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data: [],
                loading: false,
                loaded: false
            };
        }

        componentDidMount(dispatch) {
            this.setState({loading: true});
            this.props.fetch()
                .then(data => this.setState({
                    loaded: true,
                    loading: false,
                    data
                }));
        }

        render() {
            return (
                <div className="data-component">
                    {this.state.loading ? <div>Loading...</div> : <Presentational data={this.state.data} />}
                </div>
            );
        }
    }

    const mapStateToProps = (state) => {
        return {
            todos: state.todos.present
        };
    };

    const mapDispatchToProps = (dispatch) => ({
        fetch: () => dispatch(fetchTodos())
    });

    const HigherOrderComponent = compose(
        DataHoc()
    )

    export const FetchAndDisplayData = connect(
        mapStateToProps,
        mapDispatchToProps
    )(HigherOrderComponent(Presentational));

    const Presentational = ({ data }) => 
        <ul>{data.map((v, k) => 
            <li key={k}>
            {v.text}
            </li>
        )}
        </ul>
