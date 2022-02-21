# Avinoam Troen
from servers.mysql_stuff import mysql_utils
from utils import *
from flask import Flask, request
import json
from servers.mysql_stuff.input_data_to_mysql import insert_record_oneScout, my_db


# the main page director
app = Flask(__name__)


# the main page - ajax calls
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
    val = (json_data['teamName'], json_data['compName'], json_data['roundName'], json_data['points'])
    insert_record_oneScout(my_db, val)
    print('did sql stuff')

    # it would seem we always need to return a something here
    return ''


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)
