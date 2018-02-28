import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import '../../styles/section.css';

export default class TodosByCategory extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired
    }

    constructor (props) {
        super(props);
        this.state = {
            open: false
        };
    }

    handleClick = () => {
        this.setState({open: !this.state.open});
    }

    render() {
        const sectionClass = classNames("section", { open: this.state.open });

        return (
            <div className={sectionClass}>
                <button className="toggle-button">toggle</button>
                <div className="section-head" onClick={this.handleClick}>{this.props.title}</div>
                <div className="article-wrap">
                    <div className="article">
                        {this.props.children}
                    </div>
                </div>
          </div>
        );
    }
}
