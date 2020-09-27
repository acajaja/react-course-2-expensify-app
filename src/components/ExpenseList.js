import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div className="content-container">
        <section>
            <div className="list-header">
                <div className="show-for-mobile">Expenses</div>
                <div className="show-for-desktop">Expense</div>
                <div className="show-for-desktop">Amount</div>
            </div>
            <div className="list-body">
            {
                props.expenses.length === 0 ? (
                    <div className="list-item--message">
                        <p>No expenses</p>
                    </div>
                ) : (
                    props.expenses.map((expense) => (
                        <ExpenseListItem key={expense.id} {...expense} />
                    ))
                )
            }
            </div>
        </section>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);
