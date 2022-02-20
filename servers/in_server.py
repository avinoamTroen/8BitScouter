# Avinoam Troen
from utils import *
from flask import Flask, request
import json

# Python 3 server example


# the main page director
app = Flask(__name__)


# the main page - ajax calls
@app.route(PATH_FOR_INPUT, methods=['POST'])
def input_one_scout():
    print('\n|starting|')
    json_data = request.get_json(force=True)
    # print('about to print full json')
    # print('json_data' + json_data)
    print('about to iterate through json...\n')
    for thing in json_data:
        print(thing, json_data[thing])
    print('\n|done|\n')
    return 'return_data'


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)
