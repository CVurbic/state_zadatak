import { createStore, combineReducers } from 'redux'
import counterReducer from '../features/counter/counterSlice'

const rootReducer = combineReducers({
    counter: counterReducer
});

const store = createStore(rootReducer);

export default store;