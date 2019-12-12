import React, { Component } from 'react';

class NotFound extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 d-flex justify-content-center align-items-center">
                        <h1>404</h1>
                        <h2>The page you are looking for doesn't exist.</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default NotFound;