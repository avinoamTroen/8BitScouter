# Avinoam Troen
from utils import *
from flask import Flask, request, jsonify
import json
from servers.mysql_stuff.get_things_sql import my_db, get_record

# the main page director
app = Flask(__name__)


# the main page
@app.route(PATH_FOR_SCOUT_OUTPUT, methods=['GET'])
def input_one_scout(): # change name of funcrtion PLEASE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    json_data = request.json

    compName = request.args.get('compName')
    matchType = request.args.get('matchType')
    matchNumber = request.args.get('matchNumber')
    teamNumber = request.args.get('teamNumber')
    # this will get us the first result - as a rule their should not be more than one result but if there is...
    print('(my_db, compName, matchType, matchNumber, teamNumber)', (my_db, compName, matchType, matchNumber, teamNumber))
    one_scout_result = get_record(my_db, compName, matchType, matchNumber, teamNumber)
    print(one_scout_result)
    print('did sql stuff')
    # sql will return None if it doesn't find any records
    if one_scout_result is not None:
        print(one_scout_result)
        print('about to insert dummy val in json')
        one_scout_result = jsonify({'key1': 'test res1'})
        print(jsonify({'key1': 'test res1'}), "jsonify({'key1': 'test res1'})")
        print('inserted dummy val in json')
        print(one_scout_result)
        print('i should have just printed the json')
        return one_scout_result
    else:
        return 'Error - oneScout not found', 404


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=OUTPUT_SERVER_PORT, debug=True)
