import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

// Define for testing
export const Header = ({ startLogout }) => (
    <header>
        <h1>Expensify</h1>
        <nav>
            <NavLink to="/dashboard" activeClassName="is-active" title="Dashboard" exact={true}>Dashboard</NavLink>
            <NavLink to="/create" activeClassName="is-active" title="Create">Create</NavLink>
            <NavLink to="/help" activeClassName="is-active" title="Help">Help</NavLink>
            <button onClick={(e) => {
                e.preventDefault();
                startLogout();
            }} title="Logout">Logout</button>
        </nav>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
