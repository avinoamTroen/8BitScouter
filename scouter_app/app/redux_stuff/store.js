import { createStore } from 'redux';
import { currentScoutReducer } from './currentScoutReducer';
const redux = require('redux');
const store = redux.createStore(currentScoutReducer);
// const store = createStore(currentScoutReducer);

export default store;