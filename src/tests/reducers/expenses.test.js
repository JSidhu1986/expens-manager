import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should setup default expenses value', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should add the new expense', () => {
    const expense = {
        id: '4',
        description: 'Movie',
        note: '',
        amount: 1200,
        createdAt: 0
    };
    const action = { 
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should remove the expense by id', () => {
    const action = { 
        type: 'REMOVE_EXPENSE',
        id: expenses[0].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1], expenses[2]]);
});

test('should not remove the expense if id is not found', () => {
    const action = { 
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should edit the expense by id', () => {
    const update = {
        amount: 12000,
    };
    const action = { 
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        update
    };
    const state = expensesReducer(expenses, action);
    expect(state[0].amount).toBe(update.amount);
});

test('should not edit the expense if id not found', () => {
    const update = {
        amount: 12000,
    };
    const action = { 
        type: 'EDIT_EXPENSE',
        id: '-1',
        update
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});