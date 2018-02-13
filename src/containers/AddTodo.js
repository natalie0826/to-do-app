import { connect } from 'react-redux';
import { addTodo } from '../actions/actions';
import Editor from '../components/common/Editor';

const mapStateToProps = (store) => ({
    categories: store.categories
});

const mapDispatchToProps = ({
    addTodo: addTodo
});

export const AddTodo = connect(
    mapStateToProps,
    mapDispatchToProps
)(Editor);
