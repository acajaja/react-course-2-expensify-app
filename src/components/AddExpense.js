import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

export class AddExpense extends React.Component {
    onSubmit = (expense) => {
        this.props.addExpense(expense);
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <section>
                    <h1>Add New Expense</h1>
                    <ExpenseForm
                        onSubmit={this.onSubmit} />
                </section>
            </div>
        );
    }
};

const mapDispatchToProps = (dispatch) => ({
    addExpense: (expense) => dispatch(addExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpense);
