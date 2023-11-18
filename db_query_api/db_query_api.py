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


def search_candidates(name=None, location=None, karma=None):
    # Connect to the MongoDB server

    collection = db['student_profiles']

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


if __name__ == '__main__':
    app.run(debug=True)
