# Avinoam Troen
# out_server
from utils import *
from flask import Flask, request
from mysql_stuff.get_things_sql import *
from out_data import *
import mysql.connector
import servers.mysql_stuff.mysql_utils as mysql_utils

# page director - gets the correct function based on url and is in charge of threading and directing everything
app = Flask(__name__)


# get team avg
@app.route(PATH_FOR_SCOUT_TEAM_OUTPUT + AVG, methods=['POST'])
def output_team_avg():
    """
    This function is called when an http request is sent to the server at the url of app.route above
    For the function to succeed the request needs to be of type post with a json containing all the relevant fields
    :return:
    The function returns 200 status code for success, and also a json containing the "average" of the team requested
    If the function fails to do this it will return 400, 404 or 500 status code (with a short message).
    """
    try:
        # attempt to pull request params out of json
        json_data = request.json
        # print json data to log
        print("output_team_avg: json with request params")
        print(json_data)
        try:
            num_of_rounds = json_data['num_of_rounds']
            teamNumber = json_data['teamNumber']
        # if fails return status code 400 (bad request)
        except KeyError:
            # log error
            print('output_team_avg: 400')
            return 'Did not have necessary params in json', 400

        # open a connection to the DB
        the_db = mysql.connector.connect(
            host=mysql_utils.HOST,
            user=mysql_utils.USER,
            password=mysql_utils.PASSWORD,
            database=mysql_utils.DB_NAME
        )
        # get raw data from DB (all of the scouts pertaining to this given team)
        scouts, foundRecords = get_team_records(the_db, teamNumber)
        print(scouts)

        # return processed data if valid
        if foundRecords:  # if the dict scouts is not empty
            res = get_avg(scouts, num_of_rounds)
            # print res before sending to client
            print('output_team_avg: sending the below json back to the client')
            print(res)
            # send json with team average back to client
            return res, 200

        # return error if invalid (no scouts were found)
        # log error
        print('output_team_avg: 404')
        return 'Error - scouts not found', 404
    # code shouldn't get here but if it does this will catch all errors and return the error type to the client
    except Exception as error:
        # log error
        print('output_team_avg: 500')
        return type(error).__name__, 500


# get team list
@app.route(PATH_FOR_TEAM_LIST_OUTPUT, methods=['POST'])
def output_team_list():
    """
    This function is called when an http request is sent to the server at the url of app.route above
    For the function to succeed the request needs to be of type post with a json containing all the relevant fields
    :return:
    The function returns 200 status code for success, and also a json containing a list of all teams in the requested
    competition
    If the function fails to do this it will return 400, 404 or 500 status code (with a short message).
    """
    try:
        # log for starting
        print('output_team_list: starting')
        # pull request params from json
        json_data = request.json
        try:
            num_of_rounds = json_data['num_of_rounds']
            compName = json_data['compName']
        # return error if necessary params are missing
        except KeyError:
            # log error
            print('output_team_list: 404')
            return 'Did not have necessary params in json', 400

        # open a connection to the DB
        the_db = mysql.connector.connect(
            host=mysql_utils.HOST,
            user=mysql_utils.USER,
            password=mysql_utils.PASSWORD,
            database=mysql_utils.DB_NAME
        )
        # get list of the teams in the competition
        teams = get_teams_of_comp(the_db, compName)
        # for each team get data (attack score, defense score, general score)
        team_list = [] # list will be filled with dicts (each dict containing the teams different scores)
        for teamNumber in teams:
            scouts, foundRecords = get_team_records(the_db, teamNumber)
            if foundRecords:
                team_list.append(get_scores(scouts, num_of_rounds))
        # return list to client (as a json) if not empty = success
        if team_list:
            # log success
            print('output_team_list: success, returning following json')
            print(jsonify({'team_list': team_list}), 200)
            return jsonify({'team_list': team_list}), 200
        # return error if invalid - no relevant data was found
        # log error
        print('output_team_list: 404')
        return 'Error - scouts not found', 404
    # code shouldn't get here but if it does this will catch all errors and return the error type to the client
    except Exception as error:
        # log error
        print('output_team_list: 500')
        return type(error).__name__, 500


# runs from here
if __name__ == "__main__":
    app.run(host=IPADDR, port=OUTPUT_SERVER_PORT, debug=True)
