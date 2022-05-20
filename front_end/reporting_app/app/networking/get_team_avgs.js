import { OUTPUT_SERVER_IP_AND_PORT, PATH_FOR_SCOUT_TEAM_OUTPUT, AVG } from '../utils/utils'
import store from '../redux/store';


export default async function get_team_avgs() {
    // the function takes no arguements but does take data from redux

    // create body - params for server in json format
    const requestParams = {
        num_of_rounds: store.getState().goBack,
        teamNumber: store.getState().teamNumber
    }
    // create url path
    const url = OUTPUT_SERVER_IP_AND_PORT + PATH_FOR_SCOUT_TEAM_OUTPUT + AVG

    // send request and return result
    try {
        console.log('get_team_avgs: starting')
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestParams)
        })
        const data = await response.json();
        return { canUse: response.ok, payload: data }
    }
    catch (error) {
        console.log('get_team_avgs: error??')
        console.log(error)
        return { canUse: false, payload: error }
    }
}

async function get_team_avgs_with_params(goBack, teamNumber) {
    // the function takes no arguements but does take data from redux

    // create body - params for server in json format
    const requestParams = {
        num_of_rounds: goBack,
        teamNumber: teamNumber
    }
    // create url path
    const url = OUTPUT_SERVER_IP_AND_PORT + PATH_FOR_SCOUT_TEAM_OUTPUT + AVG

    // send request and return result
    try {
        console.log('get_team_avgs: starting')
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestParams)
        })
        const data = await response.json();
        return { canUse: response.ok, payload: data }
    }
    catch (error) {
        console.log('get_team_avgs: error??')
        console.log(error)
        return { canUse: false, payload: error }
    }
}

export async function getRoundFromServer() {
    goBack = store.getState().goBack
    R1Data = await get_team_avgs_with_params(goBack, store.getState().teamNumberR1)
    R2Data = await get_team_avgs_with_params(goBack, store.getState().teamNumberR2)
    R3Data = await get_team_avgs_with_params(goBack, store.getState().teamNumberR3)

    B1Data = await get_team_avgs_with_params(goBack, store.getState().teamNumberB1)
    B2Data = await get_team_avgs_with_params(goBack, store.getState().teamNumberB2)
    B3Data = await get_team_avgs_with_params(goBack, store.getState().teamNumberB3)
    if (R1Data.canUse && R2Data.canUse && R3Data.canUse && B1Data.canUse && B2Data.canUse && B3Data.canUse) {
        return { canUse: true, data: { R1Data: R1Data.payload, R2Data: R2Data.payload, R3Data: R3Data.payload, B1Data: B1Data.payload, B2Data: B2Data.payload, B3Data: B3Data.payload } }
    }
    else {
        console.log([R1Data, R2Data, R3Data, B1Data, B2Data, B3Data])
        return { canUse: false, data: 'unknown error' }
    }
}