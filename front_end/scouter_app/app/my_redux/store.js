import { combineReducers, createStore } from 'redux';
import currentScoutReducer from './currentScoutReducer';
import sendQueueReducer from './sendQueueReducer';
const rootReducer = combineReducers({ currentScout: currentScoutReducer, scoutSendingQueue: sendQueueReducer })
const store = createStore(rootReducer);

export default store;