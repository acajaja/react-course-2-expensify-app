import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('Test correct expense totals with multiple expenses', () => {
    const total = getExpensesTotal(expenses);
    expect(total).toBe(348220);
});

test('Test correct expense totals with no expenses', () => {
    const total = getExpensesTotal([]);
    expect(total).toBe(0);
});

test('Test correct expense totals with 1 expenses', () => {
    const total = getExpensesTotal([expenses[1]]);
    expect(total).toBe(343656);
});
