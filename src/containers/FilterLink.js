import { connect } from 'react-redux';
import { setFilter } from '../actions';
import FilterBlock from '../components/layout blocks/FilterBlock';

const mapStateToProps = () =>  ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: (filter) => {
        console.log('onclick', filter);
        dispatch(setFilter(filter));
    }
});

export const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterBlock);
