import authReducer from '../../reducers/auth';

test('Test auth reducer login.', () => {
    const dispatchAction = { type: 'LOGIN', uid: 'Abc123' };
    const result = authReducer({}, dispatchAction);

    expect(result).toEqual({ uid: dispatchAction.uid });
});

test('Test auth reducer logout.', () => {
    const dispatchAction = { type: 'LOGOUT' };
    const result = authReducer({ blah: 'blah' }, dispatchAction);

    expect(result).toEqual({});
});

test('Test auth reducer default behavior.', () => {
    const state = { a: 'A' };
    const result = authReducer(state, { type: '' });

    expect(result).toEqual(state);
});
