// info to help conncect to the right server
const DEV = true
export const SERVER_IP_ADDRESS = DEV ? '0.0.0.0' : '192.168.68.53' // sends to elastic ip if dev is false
export const INPUT_SERVER_PORT = '3173'

export const INPUT_SERVER_IP_AND_PORT = "http://" + SERVER_IP_ADDRESS + ":" + INPUT_SERVER_PORT + "/";
export const PATH_TO_INPUT_ONE_SCOUT_JSON = "input_server/one_scout/json";