import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
// import getVisibleExpenses from './selectors/expenses';
// import { setTextFilter } from './actions/filters';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();

// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//     // console.info(visibleExpenses);
// });

store.dispatch(addExpense({ description: 'Water Bill', amount: 56 }));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 342, createdAt: 79999 }));
store.dispatch(addExpense({ description: 'Rent', amount: 342000 }));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
