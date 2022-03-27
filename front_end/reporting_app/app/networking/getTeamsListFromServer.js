import { OUTPUT_SERVER_IP_AND_PORT, PATH_FOR_TEAM_LIST_OUTPUT, SERVER_IP_ADDRESS } from '../utils/utils'
import store from '../redux/store';


export default async function get_team_avgs() {
    // the function takes no arguements but does take data from redux

    // create body - params for server in json format
    const requestParams = {
        num_of_rounds: store.getState().goBack,
        compName: store.getState().compName
    }
    // create url path
    const url = OUTPUT_SERVER_IP_AND_PORT + PATH_FOR_TEAM_LIST_OUTPUT
    // send request and return result
    try {
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
        console.log(error)
        return { canUse: false, payload: error }
    }
}