import { connect } from 'react-redux';
import { editTodo } from '../actions/actions';
import Editor from '../components/common/Editor';

const mapStateToProps = (store) => ({
    categories: store.categories
});

const mapDispatchToProps = ({
    editTodo: editTodo
});

export const EditTodo = connect(
    mapStateToProps,
    mapDispatchToProps
)(Editor);
