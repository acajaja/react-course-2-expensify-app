import React from 'react';
import { Link } from 'react-router-dom';

export const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
        <section>
            <h3><Link to={`/edit/${id}`}>{description}</Link></h3>
            <p>${amount} - created at: {createdAt}</p>
        </section>
    </div>
);

export default ExpenseListItem;

