import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        <p>
            Ooops! 404 :(
            <br></br>
            <Link to="/" title="Home">Home</Link>
        </p>
    </div>
);

export default NotFoundPage;
