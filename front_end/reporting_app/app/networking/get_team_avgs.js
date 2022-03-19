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
        console.log('response');
        console.log(response);
        console.log('response.ok');
        console.log(response.ok);
        console.log('response.json()');
        const data = await response.json();
        console.log(data)
        return { canUse: response.ok, payload: data }
    }
    catch (error) {
        console.log('get_team_avgs: error??')
        return { canUse: false, payload: error }
    }
}