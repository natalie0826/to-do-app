import React from 'react';

export default class CheckboxWithLabel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false
        };
    }

    onChange = () => {
        this.setState({isChecked: !this.state.isChecked});
    }

    onClick = () => {
        this.setState({isChecked: !this.state.isChecked});
    }

    render() {
        return (
            <div>
                <input type="checkbox"
                            checked={this.state.isChecked}
                            onChange={this.onChange} />
                <label>
                    {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
                </label>
                <button onClick={this.onClick}>Click me</button>
            </div>
        );
    }
}
