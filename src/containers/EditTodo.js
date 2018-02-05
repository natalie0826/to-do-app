import { connect } from 'react-redux';
import { editTodo } from '../actions';
import AddBlock from '../components/AddBlock';

const mapStateToProps = (state) => {
};

const mapDispatchToProps = ({
    onEditClick: editTodo
});

export const EditTodo = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddBlock);
