import { createStore } from 'redux';

// Action generators
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count } = {}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET',
    count: 0
});


// Reducers
// 1. They are pure functions
// 2. never change state or action (kinda read-only)

// const store = createStore((state = { count: 0 }, action) => {
//     switch (action.type) {
//         case 'INCREMENT':
//             return { count: state.count + action.incrementBy };
//         case 'DECREMENT':
//             return { count: state.count - action.decrementBy };
//         case 'RESET':
//         case 'SET':
//             return { count: action.count };
//         default:
//             return state;
//     }
// });

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + action.incrementBy };
        case 'DECREMENT':
            return { count: state.count - action.decrementBy };
        case 'RESET':
        case 'SET':
            return { count: action.count };
        default:
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.info(store.getState());
});


// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

//  Use action generator
store.dispatch(incrementCount({ incrementBy: 5 }));

// store.dispatch({
//     type: 'INCREMENT'
// });

//  Use action generator
store.dispatch(incrementCount());

// store.dispatch({
//     type: 'RESET'
// });

store.dispatch(resetCount());

// store.dispatch({
//     type: 'DECREMENT'
// });

// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10
// });

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

// store.dispatch({
//     type: 'SET',
//     count: 101
// });

store.dispatch(setCount({ count: 103 }));
