import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('Test default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('Test sort by amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('Test sort by date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const action = { type: 'SORT_BY_DATE' };
    const state = filtersReducer(currentState, action);

    expect(state.sortBy).toBe('date');
});

test('Test set text filter', () => {
    const expectedText = 'Blahaha';
    const action = {
        type: 'SET_TEXT_FILTER',
        text: expectedText
    };
    const state = filtersReducer(undefined, action);

    expect(state.text).toBe(expectedText);
});

test('Test set startDate filter', () => {
    const expectedStartDate = moment();
    const action = {
        type: 'SET_START_DATE',
        startDate: expectedStartDate
    };
    const state = filtersReducer(undefined, action);

    expect(state.startDate).toBe(expectedStartDate);
});

test('Test set endDate filter', () => {
    const expectedEndDate = moment();
    const action = {
        type: 'SET_END_DATE',
        endDate: expectedEndDate
    };
    const state = filtersReducer(undefined, action);

    expect(state.endDate).toBe(expectedEndDate);
});
