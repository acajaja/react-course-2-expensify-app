// Higher Order Component patern - A (HOC) component that renders another component.
// Pros:
// Reuse code
// Render highjacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <section>
            <h1>Info</h1>
            <p>The info here is: {props.info}</p>
        </section>
    </div>
);

// Return HOC
const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>For Admin eyes only!</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

// Return HOC
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please log in to continue.</p>}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="Here's the fucktails." />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="Some secret shit!" />, document.getElementById('app'));
