import React, { Component } from 'react';
import Section from './section';
import Col from './col';

class About extends Component {
    render() {
        return (
            <div>
                <Section>
                    <Col colClass="col-sm-12 flex-left bg-warning min-100">
                        <h1 className="display-1 font-weight-bold text-light">About!</h1>
                    </Col>
                </Section>
                {/* <h1>About!</h1> */}
            </div>
        );
    }
}

export default About;