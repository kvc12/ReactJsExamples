//Initial state
let initialState ={
    quantity: 100
}
//reducer
const mobileReducer = (state = initialState, action) => {
    console.log('reducer called' +JSON.stringify(state))
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
export default mobileReducer