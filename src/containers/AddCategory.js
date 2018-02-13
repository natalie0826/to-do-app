import { connect } from 'react-redux';
import { addCategory } from '../actions/actions';
import Categories from '../components/categories/Categories';

const mapStateToProps = (store) => ({
    categories: store.categories
});

const mapDispatchToProps = ({
    addCategory: addCategory
});

export const AddCategory = connect(
    mapStateToProps,
    mapDispatchToProps
)(Categories);
