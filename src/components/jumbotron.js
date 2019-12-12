import React, { Component } from 'react';

class Jumbotron extends Component {
    render() {
        return (
            <div className={this.props.jumbotronClass}>
                <h1 className={this.props.titleClass}>{this.props.title}</h1>
            </div>
        );
    }
}

export default Jumbotron;