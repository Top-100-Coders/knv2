import json
from pymongo import MongoClient

# Load JSON data from the file
with open('data.json', 'r') as file:
    data = json.load(file)

# Connect to the MongoDB server
client = MongoClient('mongodb://localhost:27017/')

# Choose the database and collection
db = client['mulearn']
collection = db['student_profiles']

# Insert JSON objects into the MongoDB collection
result = collection.insert_many(data)

# Print the inserted IDs
print('Inserted document IDs:', result.inserted_ids)

# Close the connection
client.close()
