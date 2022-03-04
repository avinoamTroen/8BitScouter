# Avinoam Troen
from utils import *
from flask import Flask, request
import json
from mysql_stuff.input_data_to_mysql import insert_record_oneScout, my_db

# the main page director
app = Flask(__name__)


# the main page
@app.route(PATH_FOR_INPUT, methods=['POST'])
def input_one_scout():
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
        """        val = (json_data['teamName'], json_data['compName'], json_data['roundName'], json_data['points'])
        insert_record_oneScout(my_db, val)"""
        print('did sql stuff')
        # it would seem we always need to return a something here
        return ''
    except KeyError:
        return 'KeyError', 404
    # need to decide if i want to have generic exception like this - ask yocahi
    # except Exception as error:
    #    return type(error).__name__, 500


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=INPUT_SERVER_PORT, debug=True)
