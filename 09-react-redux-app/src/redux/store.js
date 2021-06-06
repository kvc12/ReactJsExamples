// import redux from 'redux'
import {createStore} from 'redux'
import mobileReducer from './mobile/MobileReducer';

//define redux store
//const createStore = redux.createStore
const store = createStore(mobileReducer);

export default store