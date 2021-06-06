const redux = require('redux')
console.log('Welcome to redux.....')

// define action- Action is function returns object which must have type property
function byeMobile() {
    console.log('action called')
    return {
        type: 'BUY_MOBILE'
    };
}
// Initial State
let initialState = {
    quantity: 100
}
// define reducer
const reducer = (state = initialState, action) => {
    console.log('reducer called')
    if (state.quantity > 0) {
        switch (action.type) {
            case 'BUY_MOBILE':
                return {
                    ...state,
                    quantity: state.quantity - 1
                }
            default:
                return state;
        }
    } else {
        return state;
    }

}

// define redux store
const createStore = redux.createStore
const store = redux.createStore(reducer);
store.subscribe(() => {
    console.log(`updated quantity: ${JSON.stringify(store.getState())}`)
});

//then app will trigger the action that will dispatch state change
store.dispatch(byeMobile());
store.dispatch(byeMobile());
store.dispatch({type: 'BUY_MOBILE' })