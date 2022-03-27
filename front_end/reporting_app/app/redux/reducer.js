import { produce } from 'immer';
import * as actionTypes from './actionTypes';

const defaultState = {
    // how many rounds to go back - default is 5
    goBack: 5,

    // scouting team
    teamNumber: 0,

    // name of competition - relevant only to certain functions
    compName: ''
};
export default function reducer(state = defaultState, action) {
    switch (action.type) {

        // meta data
        // how many rounds back to scout
        case actionTypes.setGoBack:
            return produce(state, stateCopy => {
                stateCopy.goBack = action.payload.numOfRounds
                return stateCopy;
            });

        // scouting a team
        case actionTypes.setTeam:
            return produce(state, stateCopy => {
                stateCopy.teamNumber = action.payload.teamNumber
                return stateCopy;
            });
        case actionTypes.setCompName:
            return produce(state, stateCopy => {
                stateCopy.compName = action.payload.compName
                return stateCopy;
            });



        default:
            return state
    }
}