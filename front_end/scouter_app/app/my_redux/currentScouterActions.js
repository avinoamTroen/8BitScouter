import * as actionTypes from './currentScoutActionTypes';

// *** generic setter actions ***

// metadata
export function setCompName(newCompName) {
    return { type: actionTypes.compName_SET, payload: { compName: newCompName } };
}

export function setMatchType(newMatchType) {
    return { type: actionTypes.matchType_SET, payload: { matchType: newMatchType } };
}

export function setMatchNumber(newMatchNumber) {
    return { type: actionTypes.matchNumber_SET, payload: { matchNumber: newMatchNumber } };
}

export function setTeamNumber(newTeamNumber) {
    return { type: actionTypes.teamNumber_SET, payload: { teamNumber: newTeamNumber } };
}

export function setScouterName(newScouterName) {
    return { type: actionTypes.scouterName_SET, payload: { scouterName: newScouterName } };
}

export function setWhenCaptured(newWhenCaptured) {
    return { type: actionTypes.whenCaptured_SET, payload: { whenCaptured: newWhenCaptured } };
}

export function setScouterTeamNumber(newScouterTeamNumber) {
    return { type: actionTypes.scouterTeamNumber_SET, payload: { scouterTeamNumber: newScouterTeamNumber } };
}

export function setDriverStation(newDriverStation) {
    return { type: actionTypes.driverStation_SET, payload: { driverStation: newDriverStation } };
}

// autonomous
export function setStartPlace(newStartPlace) {
    return { type: actionTypes.startPlace_SET, payload: { startPlace: newStartPlace } };
}

export function setBallsInUpperAuto(newBallsInUpperAuto) {
    return { type: actionTypes.ballsInUpperAuto_SET, payload: { ballsInUpperAuto: newBallsInUpperAuto } };
}

export function setBallsInLowerAuto(newBallsInLowerAuto) {
    return { type: actionTypes.ballsInLowerAuto_SET, payload: { ballsInLowerAuto: newBallsInLowerAuto } };
}

export function setBallsMissedAuto(newBallsMissedAuto) {
    return { type: actionTypes.ballsMissedAuto_SET, payload: { ballsMissedAuto: newBallsMissedAuto } };
}

export function setPassedLine(newPassedLine) {
    return { type: actionTypes.passedLine_SET, payload: { passedLine: newPassedLine } };
}

export function setBallsHumanShotAuto(newBallsHumanShotAuto) {
    return { type: actionTypes.ballsHumanShotAuto_SET, payload: { ballsHumanShotAuto: newBallsHumanShotAuto } };
}

export function setBallsHumanScoredAuto(newBallsHumanScoredAuto) {
    return { type: actionTypes.ballsHumanScoredAuto_SET, payload: { ballsHumanScoredAuto: newBallsHumanScoredAuto } };
}

export function setWhichBallsCollected(newWhichBallsCollected) {
    return { type: actionTypes.whichBallsCollected_SET, payload: { whichBallsCollected: newWhichBallsCollected } };
}

export function setAutoMalfunction(newAutoMalfunction) {
    return { type: actionTypes.autoMalfunction_SET, payload: { autoMalfunction: newAutoMalfunction } };
}

export function setAutoFreeText(newAutoFreeText) {
    return { type: actionTypes.autoFreeText_SET, payload: { autoFreeText: newAutoFreeText } };
}

// teleop
export function setBallsInUpperTele(newBallsInUpperTele) {
    return { type: actionTypes.ballsInUpperTele_SET, payload: { ballsInUpperTele: newBallsInUpperTele } };
}

export function setBallsInLowerTele(newBallsInLowerTele) {
    return { type: actionTypes.ballsInLowerTele_SET, payload: { ballsInLowerTele: newBallsInLowerTele } };
}

export function setBallsMissedTele(newBallsMissedTele) {
    return { type: actionTypes.ballsMissedTele_SET, payload: { ballsMissedTele: newBallsMissedTele } };
}

// endgame
export function setLevelClimbed(newLevelClimbed) {
    return { type: actionTypes.levelClimbed_SET, payload: { levelClimbed: newLevelClimbed } };
}

export function setClimbSuccessful(newClimbSuccessful) {
    return { type: actionTypes.climbSuccessful_SET, payload: { climbSuccessful: newClimbSuccessful } };
}

export function setClimbTime(newClimbTime) {
    return { type: actionTypes.climbTime_SET, payload: { climbTime: newClimbTime } };
}

// post game
export function setDefensiveDefenseLevel(newDefensiveDefenseLevel) {
    return { type: actionTypes.defensiveDefenseLevel_SET, payload: { defensiveDefenseLevel: newDefensiveDefenseLevel } };
}

export function setOffensiveDefenseLevel(newOffensiveDefenseLevel) {
    return { type: actionTypes.offensiveDefenseLevel_SET, payload: { offensiveDefenseLevel: newOffensiveDefenseLevel } };
}

export function setWasDefendedLevel(newWasDefendedLevel) {
    return { type: actionTypes.wasDefendedLevel_SET, payload: { wasDefendedLevel: newWasDefendedLevel } };
}

export function setShootingLocations(newShootingLocations) {
    return { type: actionTypes.shootingLocations_SET, payload: { shootingLocations: newShootingLocations } };
}

export function setCollectingLocations(newCollectingLocations) {
    return { type: actionTypes.collectingLocations_SET, payload: { collectingLocations: newCollectingLocations } };
}

export function setGoodTeamMateLevel(newGoodTeamMateLevel) {
    return { type: actionTypes.goodTeamMateLevel_SET, payload: { goodTeamMateLevel: newGoodTeamMateLevel } };
}

export function setWasBroken(newWasBroken) {
    return { type: actionTypes.wasBroken_SET, payload: { wasBroken: newWasBroken } };
}

export function setFreeText(newFreeText) {
    return { type: actionTypes.freeText_SET, payload: { freeText: newFreeText } };
}

export function setGeneralImpression(newGeneralImpression) {
    return { type: actionTypes.generalImpression_SET, payload: { generalImpression: newGeneralImpression } };
}

export function setRobotNoFunction(newRobotNoFunction) {
    return { type: actionTypes.robotNoFunction_SET, payload: { robotNoFunction: newRobotNoFunction } };
}

export function setSystemNoFunction(newSystemNoFunction) {
    return { type: actionTypes.systemNoFunction_SET, payload: { systemNoFunction: newSystemNoFunction } };
}


// //////////// un comment after fix actionType strings for inc/dec
// // ** inc and dec actions **
// // autonomous
// export function incBallsInUpperAuto(numToIncrement = 1) {
//     return { type: actionTypes.ballsInUpperAuto_INC, payload: { numToIncrement } };
// }
// export function decBallsInUpperAuto(numToDecrement = 1) {
//     return { type: actionTypes.ballsInUpperAuto_DEC, payload: { numToDecrement } };
// }


// export function incBallsInLowerAuto(numToIncrement = 1) {
//     return { type: actionTypes.ballsInLowerAuto_INC, payload: { numToIncrement } };
// }
// export function decBallsInLowerAuto(numToDecrement = 1) {
//     return { type: actionTypes.ballsInLowerAuto_DEC, payload: { numToDecrement } };
// }


// export function incBallsMissedAuto(numToIncrement = 1) {
//     return { type: actionTypes.ballsMissedAuto_INC, payload: { numToIncrement } };
// }
// export function decBallsMissedAuto(numToDecrement = 1) {
//     return { type: actionTypes.ballsMissedAuto_DEC, payload: { numToDecrement } };
// }


// // tele-op
// export function incBallsInUpperTele(numToIncrement = 1) {
//     return { type: actionTypes.ballsInUpperTele_INC, payload: { numToIncrement } };
// }
// export function decBallsInUpperTele(numToDecrement = 1) {
//     return { type: actionTypes.ballsInUpperTele_DEC, payload: { numToDecrement } };
// }


// export function incBallsInLowerTele(numToIncrement = 1) {
//     return { type: actionTypes.ballsInLowerTele_INC, payload: { numToIncrement } };
// }
// export function decBallsInLowerTele(numToDecrement = 1) {
//     return { type: actionTypes.ballsInLowerTele_DEC, payload: { numToDecrement } };
// }


// export function incBallsMissedTele(numToIncrement = 1) {
//     return { type: actionTypes.ballsMissedTele_INC, payload: { numToIncrement } };
// }
// export function decBallsMissedTele(numToDecrement = 1) {
//     return { type: actionTypes.ballsMissedTele_DEC, payload: { numToDecrement } };
// }


// clear current scout
export function clearedCurrentScout() {
    return { type: actionTypes.clearedCurrentScout, payload: {} };
}



