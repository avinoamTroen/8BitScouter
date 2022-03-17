# Avinoam Troen
from utils import *
from flask import Flask, request, jsonify
from mysql_stuff.get_things_sql import *
from out_data import *

# the main page director
app = Flask(__name__)


# the main page
@app.route(PATH_FOR_SCOUT_TEAM_OUTPUT + AVG, methods=['POST'])
def output_team_avg():
    # get data from json
    json_data = request.json
    try:
        num_of_rounds = json_data['num_of_rounds']
        teamNumber = json_data['teamNumber']
    except KeyError:
        return 'Did not have necessary params in json', 400

    # get data from sql
    scouts = get_team_records(my_db, teamNumber)

    # return processed data if valid
    if scouts: # if not empty
        return get_avg(scouts, num_of_rounds)

    # return error if invalid
    return 'Error - scouts not found', 404


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=OUTPUT_SERVER_PORT, debug=True)
