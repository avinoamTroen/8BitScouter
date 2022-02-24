import * as actionTypes from './actionTypes';

export function addPoints(pts) {
    return { type: actionTypes.POINTS_ADDED, payload: { points: pts } };
}
export function deductPoints(pts) {
    return { type: actionTypes.POINTS_DEDUCTED, payload: { points: pts } };
}

export function setComp(name) {
    return { type: actionTypes.COMP_NAME_SET, payload: { name: name } };
}
export function setRound(name) {
    return { type: actionTypes.ROUND_NAME_SET, payload: { name: name } };
}
export function setTeam(name) {
    return { type: actionTypes.TEAM_NAME_SET, payload: { name: name } };
}