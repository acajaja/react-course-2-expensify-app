import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

// Define for testing
export const Header = ({ startLogout }) => (
    <header className="header">
        <nav>
            <div className="content-container">
                <div className="header__content">
                    <Link className="header__title" to="/dashboard" title="Dashboard">
                        <h1>Expensify</h1>
                    </Link>
                    <button className="button button--login" onClick={(e) => {
                        e.preventDefault();
                        startLogout();
                    }} title="Logout">Logout</button>
                </div>
            </div>
        </nav>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
