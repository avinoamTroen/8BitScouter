import { combineReducers, createStore } from 'redux';
import currentScoutReducer from './currentScoutReducer';
const rootReducer = combineReducers({ currentScout: currentScoutReducer })
const store = createStore(rootReducer);

export default store;