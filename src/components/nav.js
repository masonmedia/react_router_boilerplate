import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../components/home';
import About from '../components/about';
import Contact from '../components/contact';
import NotFound from '../components/404';

class Nav extends Component {
    render() {
        return (
            <Router>
                <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                    <Link to={'/'} className="navbar-brand">Mason</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <Link to={'/'} className="nav-link">Home</Link>
                            </li>
                            <li><Link to={'/about'} className="nav-link">About</Link></li>
                            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
                        </ul>
                    </div>
                </nav>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/contact' component={Contact} />
                    <Route component={NotFound} />
                </Switch>
                </div>
            </Router>
        );
    }
}

export default Nav;