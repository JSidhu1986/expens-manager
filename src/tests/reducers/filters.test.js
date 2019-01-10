import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter value', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to date', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_DATE' });
    expect(state.sortBy).toBe('date');
});

test('should set sortBy to amount', () => {
    const currentState = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const action = { type: 'SORT_BY_AMOUNT' };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('amount');
});

test('should set text filter to given value', () => {
    const text = 'textFilter';
    const action = { 
        type: 'SET_TEXT_FILTER', 
        text
    };
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe(text);
});

test('should set startDate filter to given value', () => {
    const startDate = moment(0);
    const action = { 
        type: 'SET_START_DATE', 
        startDate
    };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(startDate);
});

test('should set endDate filter to given value', () => {
    const endDate = moment(0);
    const action = { 
        type: 'SET_END_DATE', 
        endDate
    };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(endDate);
});