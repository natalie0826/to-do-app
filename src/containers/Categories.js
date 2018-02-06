import { connect } from 'react-redux';
import { addCategory } from '../actions';
import CategoriesBlock from '../components/categories/CategoriesBlock';

const mapStateToProps = (store) => ({
    categories: store.categories
});

const mapDispatchToProps = ({
    onCategoryAdd: addCategory
});

export const Categories = connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoriesBlock);
