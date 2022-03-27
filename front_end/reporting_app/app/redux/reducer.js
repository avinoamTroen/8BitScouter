import { produce } from 'immer';
import * as actionTypes from './actionTypes';

const defaultState = {
    // how many rounds to go back - default is 5
    goBack: 5,

    // scouting team
    teamNumber: 0,

    // name of competition - relevant only to certain functions
    compName: '',

    // round scout 3 teams per color
    teamNumberR1: 0,
    teamNumberR2: 0,
    teamNumberR3: 0,

    teamNumberB1: 0,
    teamNumberB2: 0,
    teamNumberB3: 0,
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


        case actionTypes.setTeamR1:
            return produce(state, stateCopy => {
                stateCopy.teamNumberR1 = action.payload.teamNumber
                return stateCopy;
            });
        case actionTypes.setTeamR2:
            return produce(state, stateCopy => {
                stateCopy.teamNumberR2 = action.payload.teamNumber
                return stateCopy;
            });
        case actionTypes.setTeamR3:
            return produce(state, stateCopy => {
                stateCopy.teamNumberR3 = action.payload.teamNumber
                return stateCopy;
            });

        case actionTypes.setTeamB1:
            return produce(state, stateCopy => {
                stateCopy.teamNumberB1 = action.payload.teamNumber
                return stateCopy;
            });
        case actionTypes.setTeamB2:
            return produce(state, stateCopy => {
                stateCopy.teamNumberB2 = action.payload.teamNumber
                return stateCopy;
            });
        case actionTypes.setTeamB3:
            return produce(state, stateCopy => {
                stateCopy.teamNumberB3 = action.payload.teamNumber
                return stateCopy;
            });


        default:
            return state
    }
}