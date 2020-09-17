export default (state = {}, dispatchAction) => {
    switch (dispatchAction.type) {
        case 'LOGIN':
            return {
                uid: dispatchAction.uid
            };
        case 'LOGOUT':
            return {};
        default:
            return state;
    }
};
