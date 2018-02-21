import React from 'react';
import PropTypes from 'prop-types';
import { BeatLoader } from 'react-spinners';

export const Loading = (props) => {
    Loading.propTypes = {
        loading: PropTypes.bool.isRequired
    }

    return (
        <div className='loading'>
            <BeatLoader
                color={'#36D7B7'}
                loading={props.loading} />
        </div>
    )
}
