import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => (
    <div>
        <h1>Error!!!</h1>
        404 - <Link to="/">Home</Link>
    </div>
);

export default ErrorPage;