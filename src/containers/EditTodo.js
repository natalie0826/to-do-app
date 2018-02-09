import { connect } from 'react-redux';
import { editTodo } from '../actions';
import Edittor from '../components/common/Edittor';

const mapStateToProps = (store) => ({
    categories: store.categories
});

const mapDispatchToProps = ({
    onEditClick: editTodo
});

export const EditTodo = connect(
    mapStateToProps,
    mapDispatchToProps
)(Edittor);
