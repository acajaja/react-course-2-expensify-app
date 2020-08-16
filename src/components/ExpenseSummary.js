import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';

export const ExpenseSummary = ({expensesCount, totalAmount}) => {
    return (
        <div>
            <p>
                There are {expensesCount} expenses
                totaling {numeral(totalAmount / 100).format('$0,0.00')}.
            </p>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);

    return {
        expensesCount: visibleExpenses.length,
        totalAmount: expensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpenseSummary);
