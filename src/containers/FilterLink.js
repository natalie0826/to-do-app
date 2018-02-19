
import { connect } from 'react-redux';

import { setFilter } from '../actions/todos';
import Filter from '../components/common/Filter';

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: (filter) => {
        dispatch(setFilter(filter));
    }
});

export const FilterLink = connect(
    null,
    mapDispatchToProps
)(Filter);
