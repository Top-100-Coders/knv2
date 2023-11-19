from flask import Flask, request, make_response, request
from flask_cors import CORS
import json
import pymongo
from bson import ObjectId


class CustomJSONEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, ObjectId):
            return str(obj)
        return super().default(obj)


app = Flask(__name__)
CORS(app)


client = pymongo.MongoClient('mongodb://localhost:27017/')

# Choose the database and collection
db = client['mulearn']
collection = db['student_profiles']


def search_candidates(name=None, location=None, karma=None):
    # Build the query based on the given criteria
    query = {}

    if name:
        query['Name'] = {'$regex': name, '$options': 'i'}

    if location:
        query['Location'] = location

    if karma is not None:
        query['Karma'] = {'$gte': karma}

    # Execute the query and fetch the results
    query_results = list(collection.find(query))

    r = make_response(json.dumps(query_results, cls=CustomJSONEncoder))
    r.headers['Content-Type'] = 'application/json'
    return r


@app.route('/search', methods=['GET'])
def search():
    name = request.args.get('name')
    location = request.args.get('location')
    karma = request.args.get('karma')
    if karma is not None:
        karma = int(karma)

    candidates = search_candidates(name, location, karma)
    return candidates


@app.route('/add_data', methods=['POST'])
def add_data():
    data = request.get_json()
    values = data.get('values')

    if not isinstance(values, list):
        r = make_response(json.dumps(
            {'error': 'Invalid request body format'}, cls=CustomJSONEncoder))
        r.headers['Content-Type'] = 'application/json'
        return r

    result = collection.insert_many(data)
    r = make_response(json.dumps(
        {'ids': result}, cls=CustomJSONEncoder))
    r.headers['Content-Type'] = 'application/json'
    return r


if __name__ == '__main__':
    app.run(debug=True)
