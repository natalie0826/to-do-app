import { connect } from 'react-redux';
import { setFilter } from '../actions';
import { Link } from '../components/Link';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.filter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setFilter(ownProps.filter))
  }
});

export const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
