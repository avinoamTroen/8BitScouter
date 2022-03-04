import { produce } from 'immer';
import * as actionTypes from './currentScoutActionTypes';

// This part of the store handles the queue of ready oneScout to send
const scoutSendingQueue = [];
export default function sendQueueReducer(state = scoutSendingQueue, action) {
    switch (action.type) {
        // generic setters for all properties of currentScout

        // meta data
        case actionTypes.addScout:
            return produce(state, stateCopy => {
                stateCopy.push(action.payload.scout);
                return stateCopy;
            });
        case actionTypes.removeScout:
            return produce(state, stateCopy => {
                stateCopy.shift();
                return stateCopy;
            });


        default:
            return state
    }
}