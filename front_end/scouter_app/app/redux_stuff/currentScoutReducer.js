import { produce } from 'immer';
import * as actionTypes from './actionTypes';

const currentScoutInitialState = {
    // metadata
    compName: "",
    matchNumber: 0,
    teamNumber: 0,
    scouterName: "",
    // need to figure out how to do the below \/
    //whenCaptured: Date.getUTCDate(),
    scouterTeamNumber: 0,
    driverStation: -1,
    // autonomous
    startPlace: -1,
    ballsInUpperAuto: 0,
    ballsInLowerAuto: 0,
    ballsMissedAuto: 0,
    passedLine: false,
    ballsHumanShotAuto: false,
    ballsHumanScoredAuto: false,
    whichBallsCollected: [],
    autoMalfunction: false,
    autoFreeText: "",
    // tele-op
    ballsInUpperTele: 0,
    ballsInLowerTele: 0,
    ballsMissedTele: 0,
    // end game
    levelClimbed: 0,
    climbSuccessful: true,
    climbTime: 0,
    // post game
    defensiveDefenseLevel: -1,
    offensiveDefenseLevel: -1,
    wasDefendedLevel: -1,
    shootingLocations: [],
    collectingLocations: [],
    goodTeamMateLevel: 4,
    wasBroken: -1,
    freeText: "",
    generalImpression: 4,
    // post game flags
    robotNoFunction: false,
    systemNoFunction: false,
}
// This part of the store handles the queue of ready oneScout to send
// const scoutSendingQueue = { notEmpty };

export default function currentScoutReducer(state = currentScoutInitialState, action) {
    switch (action.type) {
        case actionTypes.COMP_NAME_SET:
            return produce(state, stateCopy => {
                stateCopy.compName = action.payload.name;
                return stateCopy;
            });
        case actionTypes.ROUND_NAME_SET:
            return produce(state, stateCopy => {
                stateCopy.matchNumber = action.payload.name;
                return stateCopy;
            });
        case actionTypes.TEAM_NAME_SET:
            return produce(state, stateCopy => {
                stateCopy.teamNumber = action.payload.name;
                return stateCopy;
            });
        case actionTypes.POINTS_ADDED:
            // ballsInUpperAuto is temp fix so code doesn't break - points is not generrally a part of this    
            return produce(state, stateCopy => {
                stateCopy.ballsInUpperAuto += action.payload.points;
                return stateCopy;
            });
        case actionTypes.POINTS_DEDUCTED:
            // ballsInUpperAuto is temp fix so code doesn't break - points is not generrally a part of this    
            return produce(state, stateCopy => {
                stateCopy.ballsInUpperAuto -= action.payload.points;
                return stateCopy;
            });
        default:
            return state;
    }
}
