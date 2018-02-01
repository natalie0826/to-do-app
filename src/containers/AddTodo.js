import { connect } from 'react-redux';
import { addTodo } from '../actions';
import AddBlock from '../components/AddBlock';

const mapStateToProps = () => ({
});

const mapDispatchToProps = ({
    addTodo: addTodo
});

export const AddTodo = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddBlock);
