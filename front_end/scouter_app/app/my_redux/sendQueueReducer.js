import { produce } from 'immer';
import * as actionTypes from './sendQueueActionTypes';

// This part of the store handles the queue of ready oneScout to send
const scoutSendingQueue = [];
export default function sendQueueReducer(state = scoutSendingQueue, action) {
    switch (action.type) {
        // generic setters for all properties of currentScout

        // meta data
        case actionTypes.Queue_ADDED:
            console.log('starting addScout - reducer')
            return produce(state, stateCopy => {
                stateCopy.push(action.payload.newScout);
                console.log(stateCopy)
                console.log('statecopy - reducer')
                return stateCopy;
            });
        case actionTypes.Queue_REMOVED:
            return produce(state, stateCopy => {
                stateCopy.shift();
                return stateCopy;
            });


        default:
            return state
    }
}