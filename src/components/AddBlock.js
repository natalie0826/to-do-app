import React from 'react'
import PropTypes from 'prop-types'

class AddBlock extends React.Component {

    render() {
        const {onAddClick} = this.props;

        return (
            <form onSubmit={e => {
                e.preventDefault()
                if (!this.el.value.trim()) {
                    return;
                }
                this.el.value = '';
            }}>
                <input ref={el => this.el = el} />
                <button type="submit" onClick={() => onAddClick(this.el.value)}>
                Add Todo
                </button>
            </form>
                )
    }
}

AddBlock.propTypes = {
  onAddClick: PropTypes.func.isRequired
}

export default AddBlock