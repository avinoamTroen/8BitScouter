import { produce } from 'immer';
import * as actionTypes from './actionTypes';

const initialState = {
    compName: "testComp",
    roundName: "12test",
    teamName: "7845t",
    points: 7,
}

export default function currentScoutReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.COMP_NAME_SET:
            return produce(state, stateCopy => {
                stateCopy.compName = action.payload.name;
                return stateCopy;
            });
        case actionTypes.ROUND_NAME_SET:
            return produce(state, stateCopy => {
                stateCopy.roundName = action.payload.name;
                return stateCopy;
            });
        case actionTypes.TEAM_NAME_SET:
            return produce(state, stateCopy => {
                stateCopy.teamName = action.payload.name;
                return stateCopy;
            });
        case actionTypes.POINTS_ADDED:
            return produce(state, stateCopy => {
                stateCopy.points += action.payload.points;
                return stateCopy;
            });
        case actionTypes.POINTS_DEDUCTED:
            return produce(state, stateCopy => {
                stateCopy.points -= action.payload.points;
                return stateCopy;
            });
        default:
            return state;
    }
}
