import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpense extends React.Component {
    onClick = () => {
        this.props.removeExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    };

    onSubmit = (updates) => {
        this.props.editExpense(this.props.expense.id, updates);
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.onClick} title="Remove this expense">x</button>
            </div>
        );
    };
};

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
    editExpense: (id, updates) => dispatch(editExpense(id, updates)),
    removeExpense: (data) => dispatch(removeExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);

// import React from 'react';
// import { connect } from 'react-redux';
// import ExpenseForm from './ExpenseForm';
// import { editExpense, removeExpense } from '../actions/expenses';

// const EditExpense = (props) => {
//     return (
//         <div>
//             <ExpenseForm
//                 expense={props.expense}
//                 onSubmit={(expense) => {
//                     props.dispatch(editExpense(props.expense.id, expense));
//                     props.history.push('/');
//                 }}
//             />
//             <button onClick={() => {
//                 props.dispatch(removeExpense({ id: props.expense.id }));
//                 props.history.push('/');
//             }}
//                 title="Remove this expense">x</button>
//         </div>
//     )
// };

// const mapStateToProps = (state, props) => {
//     return {
//         expense: state.expenses.find((expense) => expense.id === props.match.params.id)
//     };
// };

// export default connect(mapStateToProps)(EditExpense);
