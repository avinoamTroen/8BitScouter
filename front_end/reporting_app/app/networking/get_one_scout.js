import { OUTPUT_SERVER_IP_AND_PORT, PATH_TO_OUTPUT_GET_ONE_SCOUT_JSON } from '../utils/utils'

export default async function get_single_scout(compName, matchType, matchNumber, teamNumber) {
    // create url for request
    const paramsObj = { compName, matchType, matchNumber, teamNumber };
    console.log(paramsObj)
    const searchParams = new URLSearchParams(paramsObj);
    const url = OUTPUT_SERVER_IP_AND_PORT + PATH_TO_OUTPUT_GET_ONE_SCOUT_JSON + '?' + searchParams.toString()
    console.log(url)

    // send request and return result
    try {
        const response = await fetch(url, {
            method: 'GET',
        })
        console.log('response');
        console.log(response);
        return { canUse: response.ok, payload: response.json }
    }
    catch (error) {
        return { canUse: false, payload: error }
    }
}