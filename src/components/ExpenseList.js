import React from 'react';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import { connect } from 'react-redux';

export const ExpenseList = (props) => (
    <div>
        { 
            props.expenses.length === 0 ? (
                <p> No Expenses </p>
            ) : ( 
                props.expenses.map((expense) => {
                    return <ExpenseListItem key={expense.id} {...expense}/>
                })
            )
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filter)
    };
};
export default connect(mapStateToProps)(ExpenseList);

