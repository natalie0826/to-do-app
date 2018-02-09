import { connect } from 'react-redux';
import { setFilter } from '../actions';
import FilterBlock from '../components/layout blocks/FilterBlock';

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: (filter) => {
        dispatch(setFilter(filter));
    }
});

export const FilterLink = connect(
    null,
    mapDispatchToProps
)(FilterBlock);
