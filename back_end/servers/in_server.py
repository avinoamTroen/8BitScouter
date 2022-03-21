# Avinoam Troen
from utils import *
from flask import Flask, request
from mysql_stuff.input_data_to_mysql import insert_record_oneScout, my_db
import mysql.connector
import servers.mysql_stuff.mysql_utils as mysql_utils


# the main page director
app = Flask(__name__)


# the main page
@app.route(PATH_FOR_INPUT, methods=['POST'])
def input_one_scout():
    # need new connection each time i think?
    the_db = mysql.connector.connect(
        host=mysql_utils.HOST,
        user=mysql_utils.USER,
        password=mysql_utils.PASSWORD,
        database=mysql_utils.DB_NAME
    )

    print('\n|starting|')
    json_data = request.json
    print('about to print full json')
    print('json_data\n', json_data)
    print('type(json_data) = ', type(json_data))
    print('about to iterate through json...\n')
    for thing in json_data:
        print(thing, json_data[thing])
    print('\n|done|\n')
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

        print(val)
        insert_record_oneScout(the_db, val)
        print('did sql stuff')
        # it would seem we always need to return a something here
        return ''
    except KeyError:
        return 'KeyError', 404
    # need to decide if i want to have generic exception like this - ask yocahi
    # except Exception as error:
    #    return type(error).__name__, 500


if __name__ == "__main__":
    app.run(host=IPADDR, port=INPUT_SERVER_PORT, debug=True)
