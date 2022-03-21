# Avinoam Troen
from utils import *
from flask import Flask, request
from mysql_stuff.get_things_sql import *
from out_data import *
import mysql.connector
import servers.mysql_stuff.mysql_utils as mysql_utils



# the main page director
app = Flask(__name__)


# the main page
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


if __name__ == "__main__":
    app.run(host=IPADDR, port=OUTPUT_SERVER_PORT, debug=True)
