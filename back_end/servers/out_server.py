# Avinoam Troen
from utils import *
from flask import Flask, request
from mysql_stuff.get_things_sql import *
from out_data import *
import mysql.connector
import servers.mysql_stuff.mysql_utils as mysql_utils

# the main page director
app = Flask(__name__)


# get team avg
@app.route(PATH_FOR_SCOUT_TEAM_OUTPUT + AVG, methods=['POST'])
def output_team_avg():
    # need new connection each time so get good info
    the_db = mysql.connector.connect(
        host=mysql_utils.HOST,
        user=mysql_utils.USER,
        password=mysql_utils.PASSWORD,
        database=mysql_utils.DB_NAME
    )

    # get data from json
    json_data = request.json
    print(json_data)
    try:
        num_of_rounds = json_data['num_of_rounds']
        teamNumber = json_data['teamNumber']
    except KeyError:
        return 'Did not have necessary params in json', 400

    # get data from sql
    scouts, foundRecords = get_team_records(the_db, teamNumber)
    print(scouts)

    # return processed data if valid
    if foundRecords:  # if not empty
        res = get_avg(scouts, num_of_rounds)
        print(res)
        return res

    # return error if invalid
    return 'Error - scouts not found', 404


# get team list
@app.route(PATH_FOR_TEAM_LIST_OUTPUT, methods=['POST'])
def output_team_list():
    # need new connection each time so get good info
    the_db = mysql.connector.connect(
        host=mysql_utils.HOST,
        user=mysql_utils.USER,
        password=mysql_utils.PASSWORD,
        database=mysql_utils.DB_NAME
    )

    # get data from json
    json_data = request.json
    try:
        num_of_rounds = json_data['num_of_rounds']
        compName = json_data['compName']
    except KeyError:
        return 'Did not have necessary params in json', 400
    # get list of teams in comp
    teams = get_teams_of_comp(the_db, compName)
    # for each team get data (attack score, defense score, general score)
    team_list = []
    for teamNumber in teams:
        scouts, foundRecords = get_team_records(the_db, teamNumber)
        if foundRecords:
            team_list.append(get_scores(scouts, num_of_rounds))
    # return list if not empty
    if team_list:
        return jsonify({'team_list': team_list})
    # return error if invalid
    return 'Error - scouts not found', 404


if __name__ == "__main__":
    app.run(host=IPADDR, port=OUTPUT_SERVER_PORT, debug=True)
