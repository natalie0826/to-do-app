import React from 'react'
import PropTypes from 'prop-types'

class AddBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
      }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

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
                <input onChange={this.handleChange} value={this.state.value}/>
                <p>{!this.state.value ? 'Please, write a todo' : `You are typing ${this.state.value}`}</p>
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