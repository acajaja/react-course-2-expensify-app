import moment from 'moment';
import { setStartDate, setEndDate, sortByAmount, sortByDate, setTextFilter } from '../../actions/filters';

test('Test setStartDate', () => {
    const actionOnject = setStartDate(moment(0));
    expect(actionOnject).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('Test setEndDate', () => {
    const actionOnject = setEndDate(moment(0));
    expect(actionOnject).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('Test sortByAmount', () => {
    const actionOnject = sortByAmount();
    expect(actionOnject).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('Test sortByDate', () => {
    const actionOnject = sortByDate();
    expect(actionOnject).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('Test setTextFilter', () => {
    const text = 'Hanz';
    const actionOnject = setTextFilter(text);
    expect(actionOnject).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    });
});

test('Test setTextFilter clear', () => {
    const actionOnject = setTextFilter();
    expect(actionOnject).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});
