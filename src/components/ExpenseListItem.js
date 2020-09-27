import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <Link className="list-item" to={`/edit/${id}`}>
        <div>
            <p className="list-item__title">{description}</p>
            <span className="list-item__sub-title">created: {moment(createdAt).format('MMMM Do, YYYY')}</span>
        </div>
        <p className="list-item__data">
            {numeral(amount / 100).format('$0,0.00')}
        </p>
    </Link>
);

export default ExpenseListItem;
