import { produce } from 'immer';
import * as actionTypes from './currentScoutActionTypes';

const currentScoutInitialState = {
    // metadata
    compName: "",
    matchType: "",
    matchNumber: 0,
    teamNumber: 0,
    scouterName: "",
    whenCaptured: "1989-03-20 00:00:00",
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
        // generic setters for all properties of currentScout
        case actionTypes.compName_SET:
            return produce(state, stateCopy => {
                stateCopy.compName = action.payload.compName;
                return stateCopy;
            });
        case actionTypes.matchType_SET:
            return produce(state, stateCopy => {
                stateCopy.matchType = action.payload.matchType;
                return stateCopy;
            });
        case actionTypes.matchNumber_SET:
            return produce(state, stateCopy => {
                stateCopy.matchNumber = action.payload.matchNumber;
                return stateCopy;
            });
        case actionTypes.teamNumber_SET:
            return produce(state, stateCopy => {
                stateCopy.teamNumber = action.payload.teamNumber;
                return stateCopy;
            });
        case actionTypes.scouterName_SET:
            return produce(state, stateCopy => {
                stateCopy.scouterName = action.payload.scouterName;
                return stateCopy;
            });
        case actionTypes.whenCaptured_SET:
            return produce(state, stateCopy => {
                stateCopy.whenCaptured = action.payload.whenCaptured;
                return stateCopy;
            });
        case actionTypes.scouterTeamNumber_SET:
            return produce(state, stateCopy => {
                stateCopy.scouterTeamNumber = action.payload.scouterTeamNumber;
                return stateCopy;
            });
        case actionTypes.driverStation_SET:
            return produce(state, stateCopy => {
                stateCopy.driverStation = action.payload.driverStation;
                return stateCopy;
            });
        case actionTypes.startPlace_SET:
            return produce(state, stateCopy => {
                stateCopy.startPlace = action.payload.startPlace;
                return stateCopy;
            });
        case actionTypes.ballsInUpperAuto_SET:
            return produce(state, stateCopy => {
                stateCopy.ballsInUpperAuto = action.payload.ballsInUpperAuto;
                return stateCopy;
            });
        case actionTypes.ballsInLowerAuto_SET:
            return produce(state, stateCopy => {
                stateCopy.ballsInLowerAuto = action.payload.ballsInLowerAuto;
                return stateCopy;
            });
        case actionTypes.ballsMissedAuto_SET:
            return produce(state, stateCopy => {
                stateCopy.ballsMissedAuto = action.payload.ballsMissedAuto;
                return stateCopy;
            });
        case actionTypes.passedLine_SET:
            return produce(state, stateCopy => {
                stateCopy.passedLine = action.payload.passedLine;
                return stateCopy;
            });
        case actionTypes.ballsHumanShotAuto_SET:
            return produce(state, stateCopy => {
                stateCopy.ballsHumanShotAuto = action.payload.ballsHumanShotAuto;
                return stateCopy;
            });
        case actionTypes.ballsHumanScoredAuto_SET:
            return produce(state, stateCopy => {
                stateCopy.ballsHumanScoredAuto = action.payload.ballsHumanScoredAuto;
                return stateCopy;
            });
        case actionTypes.whichBallsCollected_SET:
            return produce(state, stateCopy => {
                stateCopy.whichBallsCollected = action.payload.whichBallsCollected;
                return stateCopy;
            });
        case actionTypes.autoMalfunction_SET:
            return produce(state, stateCopy => {
                stateCopy.autoMalfunction = action.payload.autoMalfunction;
                return stateCopy;
            });
        case actionTypes.autoFreeText_SET:
            return produce(state, stateCopy => {
                stateCopy.autoFreeText = action.payload.autoFreeText;
                return stateCopy;
            });
        case actionTypes.ballsInUpperTele_SET:
            return produce(state, stateCopy => {
                stateCopy.ballsInUpperTele = action.payload.ballsInUpperTele;
                return stateCopy;
            });
        case actionTypes.ballsInLowerTele_SET:
            return produce(state, stateCopy => {
                stateCopy.ballsInLowerTele = action.payload.ballsInLowerTele;
                return stateCopy;
            });
        case actionTypes.ballsMissedTele_SET:
            return produce(state, stateCopy => {
                stateCopy.ballsMissedTele = action.payload.ballsMissedTele;
                return stateCopy;
            });
        case actionTypes.levelClimbed_SET:
            return produce(state, stateCopy => {
                stateCopy.levelClimbed = action.payload.levelClimbed;
                return stateCopy;
            });
        case actionTypes.climbSuccessful_SET:
            return produce(state, stateCopy => {
                stateCopy.climbSuccessful = action.payload.climbSuccessful;
                return stateCopy;
            });
        case actionTypes.climbTime_SET:
            return produce(state, stateCopy => {
                stateCopy.climbTime = action.payload.climbTime;
                return stateCopy;
            });
        case actionTypes.defensiveDefenseLevel_SET:
            return produce(state, stateCopy => {
                stateCopy.defensiveDefenseLevel = action.payload.defensiveDefenseLevel;
                return stateCopy;
            });
        case actionTypes.offensiveDefenseLevel_SET:
            return produce(state, stateCopy => {
                stateCopy.offensiveDefenseLevel = action.payload.offensiveDefenseLevel;
                return stateCopy;
            });
        case actionTypes.wasDefendedLevel_SET:
            return produce(state, stateCopy => {
                stateCopy.wasDefendedLevel = action.payload.wasDefendedLevel;
                return stateCopy;
            });
        case actionTypes.shootingLocations_SET:
            return produce(state, stateCopy => {
                stateCopy.shootingLocations = action.payload.shootingLocations;
                return stateCopy;
            });
        case actionTypes.collectingLocations_SET:
            return produce(state, stateCopy => {
                stateCopy.collectingLocations = action.payload.collectingLocations;
                return stateCopy;
            });
        case actionTypes.goodTeamMateLevel_SET:
            return produce(state, stateCopy => {
                stateCopy.goodTeamMateLevel = action.payload.goodTeamMateLevel;
                return stateCopy;
            });
        case actionTypes.wasBroken_SET:
            return produce(state, stateCopy => {
                stateCopy.wasBroken = action.payload.wasBroken;
                return stateCopy;
            });
        case actionTypes.freeText_SET:
            return produce(state, stateCopy => {
                stateCopy.freeText = action.payload.freeText;
                return stateCopy;
            });
        case actionTypes.generalImpression_SET:
            return produce(state, stateCopy => {
                stateCopy.generalImpression = action.payload.generalImpression;
                return stateCopy;
            });
        case actionTypes.robotNoFunction_SET:
            return produce(state, stateCopy => {
                stateCopy.robotNoFunction = action.payload.robotNoFunction;
                return stateCopy;
            });
        case actionTypes.systemNoFunction_SET:
            return produce(state, stateCopy => {
                stateCopy.systemNoFunction = action.payload.systemNoFunction;
                return stateCopy;
            });
        // increment and de-increment action cases

        // default returns state - if gets bad action and at the beginning when initialized
        default:
            return state;
    }
}
