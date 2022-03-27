import * as actionTypes from './actionTypes';

// *** generic setter actions ***

// metadata
export function setTeamNumber(teamNumber) {
    return { type: actionTypes.setTeam, payload: { teamNumber: teamNumber } };
}
export function setGoBack(numOfRounds) {
    return { type: actionTypes.setGoBack, payload: { numOfRounds: numOfRounds } };
}
export function setCompName(compName) {
    return { type: actionTypes.setCompName, payload: { compName: compName } };
}

// round  - 6 teams
export function setTeamNumberR1(teamNumber) {
    return { type: actionTypes.setTeamR1, payload: { teamNumber: teamNumber } };
}
export function setTeamNumberR2(teamNumber) {
    return { type: actionTypes.setTeamR2, payload: { teamNumber: teamNumber } };
}
export function setTeamNumberR3(teamNumber) {
    return { type: actionTypes.setTeamR3, payload: { teamNumber: teamNumber } };
}

export function setTeamNumberB1(teamNumber) {
    return { type: actionTypes.setTeamB1, payload: { teamNumber: teamNumber } };
}
export function setTeamNumberB2(teamNumber) {
    return { type: actionTypes.setTeamB2, payload: { teamNumber: teamNumber } };
}
export function setTeamNumberB3(teamNumber) {
    return { type: actionTypes.setTeamB3, payload: { teamNumber: teamNumber } };
}