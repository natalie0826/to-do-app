import { connect } from 'react-redux';
import { editTodo } from '../actions';
import Todo from '../components/Todo';

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = ({
    onEditClick: editTodo
})

const EditTodo = connect(
    mapStateToProps,
    mapDispatchToProps
)(Todo)

export default EditTodo
