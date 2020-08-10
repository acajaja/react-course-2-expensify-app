import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import expenses from '../fixtures/expenses';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(<ExpenseListFilters
        filters={filters}
        setTextFilter={setTextFilter}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
    />);
});

test('Test render ExpenseListFilters', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Test render ExpenseListFilter with alt fitlers', () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('Test handle text change', () => {
    const expectedValue = 'a';
    wrapper.find('input').simulate('change', {
        target: { value: expectedValue }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(expectedValue);
});

test('Test handle sortByDate', () => {
    const expectedValue = 'DATE';
    wrapper.setProps({
        filters: altFilters
    });
    wrapper.find('select').simulate('change', {
        target: { value: expectedValue }
    });
    expect(sortByDate).toHaveBeenCalled();
});

test('Test handle sortByAmount', () => {
    const expectedValue = 'AMOUNT';
    wrapper.setProps({
        filters: altFilters
    });
    wrapper.find('select').simulate('change', {
        target: { value: expectedValue }
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test('Test handle date range change', () => {
    const expectedStartDate = moment(0).add(1, 'days');
    const expectedEndDate = moment(0).add(4, 'days');
    wrapper.find('DateRangePicker').prop('onDatesChange')({
        startDate: expectedStartDate,
        endDate: expectedEndDate
    });
    expect(setStartDate).toHaveBeenLastCalledWith(expectedStartDate);
    expect(setEndDate).toHaveBeenLastCalledWith(expectedEndDate);
});

test('Test handle date focus change', () => {
    const expectedFocus = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(expectedFocus);
    expect(wrapper.state('calendarFocused')).toBe(expectedFocus);
});
