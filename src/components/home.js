import React, { Component } from 'react';
// import Jumbotron from './jumbotron';
import Section from './section';
import Col from './col';

class Home extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Section>
                    <Col colClass="col-sm-12 flex-left bg-info min-100">
                        <h1 className="display-1 font-weight-bold text-light">Welcome!</h1>
                    </Col>
                </Section>

                <Section>
                    <Col 
                    colClass="col-sm-12 flex-left bg-danger min-100">
                        <h1 
                        className="display-1 text-light">About!</h1>
                    </Col>
                </Section>

            </div>
        );
    }
}

export default Home;