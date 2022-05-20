# Avinoam Troen
# in_server
from utils import *
from flask import Flask, request
from mysql_stuff.input_data_to_mysql import insert_record_oneScout
import mysql.connector
import servers.mysql_stuff.mysql_utils as mysql_utils


# page director - gets the correct function based on url and is in charge of threading and directing everything
app = Flask(__name__)


# the main function
@app.route(PATH_FOR_INPUT, methods=['POST'])
def input_one_scout():
    """
    This function is called when an http request is sent to the server at the url of app.route
    For the function to succeed the request needs to be of type post with a json containing all the relevant fields
    :return:
    The function returns 200 status code for success and 400 or 500 status code (with a short message) for failure.
    """
    json_data = request.json

    print('\n|input_one_scout: initiating|\n')
    print('|input_one_scout: about to print oneScout Json|')
    for key in json_data:
        print(key, json_data[key])
    print('\n|input_one_scout: done|\n')

    try:
        val = (json_data['compName'], json_data['matchType'], json_data['matchNumber'], json_data['teamNumber'],
               json_data['scouterName'], json_data['whenCaptured'], json_data['scouterTeamNumber'],
               json_data['ballsInUpperAuto'],
               json_data['ballsInLowerAuto'], json_data['ballsMissedAuto'], json_data['passedLine'],
               json_data['ballsHumanShotAuto'], json_data['ballsHumanScoredAuto'], json_data['autoMalfunction'],
               json_data['autoFreeText'], json_data['ballsInUpperTele'], json_data['ballsInLowerTele'],
               json_data['ballsMissedTele'], json_data['levelClimbed'], json_data['climbSuccessful'],
               json_data['climbTime'], json_data['defensiveDefenseLevel'], json_data['offensiveDefenseLevel'],
               json_data['wasDefendedLevel'], json_data['goodTeamMateLevel'], json_data['wasBroken'],
               json_data['freeText'], json_data['generalImpression'], json_data['robotNoFunction'],
               json_data['systemNoFunction'])

        # print out the values we will put into the DB for debugging/log purposes
        print('input_one_scout: about to input the following into the DB')
        print(val)

        # open a connection to the DB
        the_db = mysql.connector.connect(
            host=mysql_utils.HOST,
            user=mysql_utils.USER,
            password=mysql_utils.PASSWORD,
            database=mysql_utils.DB_NAME
        )
        # insert oneScout to DB
        insert_record_oneScout(the_db, val)

        # if we got here the input was successful - another log message
        print('input_one_scout: successful input to DB')

        # if we got to here we were successful and can return 200 - a success status code
        return '', 200
    # this is useful in case the request json was missing fields (400, bad request)
    except KeyError:
        return 'KeyError', 400
    # the code shouldn't get here, but if it does at least we'll get back the type of error (500, internal server error)
    except Exception as error:
        return type(error).__name__, 500


# runs from here
if __name__ == "__main__":
    app.run(host=IPADDR, port=INPUT_SERVER_PORT, debug=True)
