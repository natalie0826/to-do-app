import React from 'react';
import { connect } from 'react-redux';

import { Loading } from '../../components/Loading';

export const withLoading = (isLoading) => (ComposedComponent) => {
    class withLoading extends React.Component {
        render() {
            return isLoading
                ? <Loading loading={isLoading} />
                : <ComposedComponent />
        }
    }
}