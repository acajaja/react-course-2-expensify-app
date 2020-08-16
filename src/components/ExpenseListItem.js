import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
        <section>
            <h3><Link to={`/edit/${id}`}>{description}</Link></h3>
            <p>
                {numeral(amount / 100).format('$0,0.00')}
                -
                created at: {moment(createdAt).format('MMMM Do, YYYY')}
            </p>
        </section>
    </div>
);

export default ExpenseListItem;
