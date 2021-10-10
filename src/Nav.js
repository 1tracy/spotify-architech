import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <ul className="nav-links">
                <Link to='//test'>
                    <button className="btn-calendar"></button>
                </Link>
            </ul>
        </nav>
    )
}
export default Nav;