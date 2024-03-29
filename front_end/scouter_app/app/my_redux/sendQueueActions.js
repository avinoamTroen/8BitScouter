import * as actionTypes from './sendQueueActionTypes';

// metadata
export function addQueue(newScout) {
    return { type: actionTypes.Queue_ADDED, payload: { newScout: newScout } };
}
export function removeQueue() {
    return { type: actionTypes.Queue_REMOVED, payload: {} };
}