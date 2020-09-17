import { login, logout } from '../../actions/auth';

test('Test login action.', () => {
    const uid = 'abc123';
    const result = login(uid);

    expect(result).toEqual({type: 'LOGIN', uid});
});

test('Test logout action.', () => {
    const result = logout();

    expect(result).toEqual({type: 'LOGOUT'});
});
