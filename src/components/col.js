import React, { Component } from 'react';

class Col extends Component {
    render() {
        return (
            <div className={this.props.colClass}>
                {this.props.children}
            </div>
        );
    }
}

export default Col;