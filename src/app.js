import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({description: 'Water Bill', amount: 100, createdAt: 10000}));
store.dispatch(addExpense({description: 'Gas Bill', amount: 300, createdAt: 1001}));
store.dispatch(addExpense({description: 'Rent', amount: 3000, createdAt: 1041}));

// store.dispatch(removeExpense(expenseTwo.expense.id));
// store.dispatch(editExpense(expenseOne.expense.id, {amount: 300}));

//store.dispatch(setTextFilter('Water'));
//store.dispatch(sortByAmount());
//store.dispatch(sortByDate());

//store.dispatch(setStartDate(1250));
//store.dispatch(setEndDate(1250));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));