import { INPUT_SERVER_IP_AND_PORT, PATH_TO_INPUT_ONE_SCOUT_JSON } from '../utils/utils'


export default sendOneScout = async (oneScout) => {
    // accepts oneScout - a js object representing a single scout
    // this function will return a resolved promise with an object consisting of two fields
    // 1. successful - this will be a boolean value, 2. msg - this will be the error/success msg.
    // using 2 will be for debugging purposes mainly, and possibly also to tell the user what happened
    try {
        const baseUrl = INPUT_SERVER_IP_AND_PORT + PATH_TO_INPUT_ONE_SCOUT_JSON
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(oneScout)
        })
        return { successful: response.ok, msg: response.status };
    } catch (error) {
        return { successful: false, msg: error }
    }

}