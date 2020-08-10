import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => (
    <header>
        <h1>Expensify</h1>
        <nav>
            <NavLink to="/" activeClassName="is-active" title="Home" exact={true}>Home</NavLink>
            <NavLink to="/create" activeClassName="is-active" title="Create">Create</NavLink>
            <NavLink to="/edit" activeClassName="is-active" title="Edit">Edit</NavLink>
            <NavLink to="/help" activeClassName="is-active" title="Help">Help</NavLink>
        </nav>
    </header>
);

export default Header;
