import * as actionTypes from './actionTypes';

// *** generic setter actions ***

// metadata
export function setTeamNumber(teamNumber) {
    return { type: actionTypes.setTeam, payload: { teamNumber: teamNumber } };
}
export function setGoBack(numOfRounds) {
    return { type: actionTypes.setGoBack, payload: { numOfRounds: numOfRounds } };
}