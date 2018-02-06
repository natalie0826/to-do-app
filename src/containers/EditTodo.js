import { connect } from 'react-redux';
import { editTodo } from '../actions';
import AddBlock from '../components/layout blocks/AddBlock';

const mapStateToProps = (store) => ({
    categories: store.categories
});

const mapDispatchToProps = ({
    onEditClick: editTodo
});

export const EditTodo = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddBlock);
