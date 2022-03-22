DEV = True
if DEV:
    IPADDR = "0.0.0.0"  # i think this should work for everything so ill leave dev always true for now
else:
    IPADDR = "184.72.229.230"
INPUT_SERVER_PORT = 3173
OUTPUT_SERVER_PORT = 3713
HOST_NAME = "localhost"
PATH_FOR_INPUT = '/input_server/one_scout/json'
PATH_FOR_SCOUT_OUTPUT = '/output_server/one_scout/json'
PATH_FOR_SCOUT_TEAM_OUTPUT = '/output_server/scout_team/json'
AVG = '/avg'

PATH_FOR_TEAM_LIST_OUTPUT = '/output_server/team_list/json'
