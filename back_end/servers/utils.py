DEV = True  # if running in development env
if DEV:
    IPADDR = "0.0.0.0"  # dev environment - goes to computers default
else:
    IPADDR = "184.72.229.230"  # server IP

# ports for the different servers
INPUT_SERVER_PORT = 3173
OUTPUT_SERVER_PORT = 3713

# paths for different functions
PATH_FOR_INPUT = '/input_server/one_scout/json'
PATH_FOR_SCOUT_TEAM_OUTPUT = '/output_server/scout_team/json'
AVG = '/avg'  # to add to PATH_FOR_SCOUT_TEAM_OUTPUT if want avg (currently only option)

PATH_FOR_TEAM_LIST_OUTPUT = '/output_server/team_list/json'
