import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import HelpPage from '../components/Help';
import ExpenseDashboardPage from '../components/ExpenseDashboard';
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpense} />
                <Route path="/edit/:id" component={EditExpense} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
