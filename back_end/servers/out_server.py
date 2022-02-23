# Avinoam Troen
from utils import *
from flask import Flask, request, jsonify
import json
from servers.mysql_stuff.get_things_sql import my_db, get_record

# the main page director
app = Flask(__name__)


# the main page
@app.route(PATH_FOR_SCOUT_OUTPUT, methods=['GET'])
def input_one_scout():
    comp = request.args.get('compName')
    round_number = request.args.get('roundNumberStr')
    team = request.args.get('teamNumberStr')
    # this will get us the first result - as a rule their should not be more than one result but if there is...
    one_scout_result = get_record(my_db, comp, round_number, team)
    print('did sql stuff')
    # sql will return None if it doesn't find any records
    if one_scout_result is not None:
        print(one_scout_result)
        one_scout_result = jsonify({'points': one_scout_result[0]})
        print(one_scout_result)
        return one_scout_result
    else:
        return 'Error - oneScout not found', 404


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)
