import { createStore } from 'redux';
import currentScoutReducer from './currentScoutReducer';

const store = createStore(currentScoutReducer);

export default store;