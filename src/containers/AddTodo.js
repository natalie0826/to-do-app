import { connect } from 'react-redux';
import { addTodo } from '../actions';
import Edittor from '../components/common/Edittor';

const mapStateToProps = (store) => ({
    categories: store.categories
});

const mapDispatchToProps = ({
    addTodo: addTodo
});

export const AddTodo = connect(
    mapStateToProps,
    mapDispatchToProps
)(Edittor);
