import React, { Component } from 'react';

class Section extends Component {
    render() {
        return (
            <div className="row">
                {this.props.children}
            </div>
        );
    }
}

export default Section;