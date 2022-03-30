// server info
const DEV = false
const devServerIp = '192.168.43.198' // change this when developing and ip of local computer changes
export const SERVER_IP_ADDRESS = DEV ? devServerIp : '184.72.229.230' // sends to elastic ip if dev is false
export const OUTPUT_SERVER_PORT = '3713'


export const OUTPUT_SERVER_IP_AND_PORT = "http://" + SERVER_IP_ADDRESS + ":" + OUTPUT_SERVER_PORT + "/";
export const PATH_TO_OUTPUT_GET_ONE_SCOUT_JSON = "output_server/one_scout/json";
export const PATH_FOR_SCOUT_TEAM_OUTPUT = 'output_server/scout_team/json';
export const AVG = '/avg'

export const PATH_FOR_TEAM_LIST_OUTPUT = 'output_server/team_list/json'


export const round2 = (num) => {
    return Math.round(num * 100) / 100
}


