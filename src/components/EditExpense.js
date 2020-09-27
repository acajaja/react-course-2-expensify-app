import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpense extends React.Component {
    onClick = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    };

    onSubmit = (updates) => {
        this.props.startEditExpense(this.props.expense.id, updates);
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <section>
                    <div className="page-header">
                        <div className="content-container">
                            <h1 className="page-header__title">Edit Expense</h1>
                        </div>
                    </div>
                    <div className="content-container">
                        <ExpenseForm
                            expense={this.props.expense}
                            onSubmit={this.onSubmit}
                        />
                        <div>
                            <button
                                className="button button--remove"
                                onClick={this.onClick}
                                title="Remove this expense"
                            >Remove Expense</button>
                        </div>
                    </div>
                </section>
            </div>
        );
    };
};

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
    startEditExpense: (id, updates) => dispatch(startEditExpense(id, updates)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);
