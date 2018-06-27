import React from 'react';
import {Link} from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return (
            <nav className="nav flex-column offset-sm-2 col-sm-1">
                <Link to="#" className="nav-link">Link A</Link>
                <Link to="#" className="nav-link">Link B</Link>
                <Link to="#" className="nav-link">Link C</Link>
                <Link to="#" className="nav-link">Link D</Link>
                <Link to="#" className="nav-link">Link E</Link>
            </nav>
        );
    }
}

export default Nav;