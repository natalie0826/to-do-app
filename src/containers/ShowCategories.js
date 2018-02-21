import { connect } from 'react-redux';

import { addCategory } from '../actions/categories';
import CategoriesModal from '../components/categories/CategoriesModal';

const mapStateToProps = (store) => ({
    categories: store.categories,
    store: store
});

const mapDispatchToProps = ({
    addCategory: addCategory
});

export const ShowCategories = connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoriesModal);
