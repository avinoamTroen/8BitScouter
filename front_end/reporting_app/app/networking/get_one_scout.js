import { OUTPUT_SERVER_IP_AND_PORT, PATH_TO_OUTPUT_GET_ONE_SCOUT_JSON } from '../utils/utils'

export default async function get_single_scout(compName, matchType, matchNumber, teamNumber) {
    const paramsObj = { compName, matchType, matchNumber, teamNumber };
    console.log(paramsObj)
    const searchParams = new URLSearchParams(paramsObj);
    const url = OUTPUT_SERVER_IP_AND_PORT + PATH_TO_OUTPUT_GET_ONE_SCOUT_JSON + '?' + searchParams.toString()
    console.log(url)
    const res = await fetch(url, {
        method: 'GET',
    })
        .then(response => { console.log('response.json'); console.log(response.json); return { canUse: response.ok, payload: response.json } })
        .catch(response => { return { canUse: false, payload: response.json } })

    console.log('res')
    console.log(res)

    return res
}