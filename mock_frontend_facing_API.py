from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/search', methods=['GET'])
def search():
    name = request.args.get('name')
    location = request.args.get('location')
    karma = request.args.get('karma')

    response = {
        "Name": name,
        "Skills": ["flutter", "agile"],
        "Karma": karma,
        "Location": location,
        "Projects": ["Password cracker", "recipe checker"],
        "Git Activity": 57
    }

    return jsonify(response)

if __name__ == '__main__':
    app.run()
