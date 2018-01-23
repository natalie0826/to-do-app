import React from 'react'
import PropTypes from 'prop-types'

class AddBlock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }

    render() {
        const {onAddClick} = this.props;

        return (
            <form onSubmit={e => {
                e.preventDefault()
                if (!this.state.input.value.trim()) {
                return
                }
                
                this.state.input.value = ''
            }}>
                <input ref={node => {
                this.state.input = node
                }} />
                <button type="submit" onClick={() => onAddClick(this.state.input.value)}>
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