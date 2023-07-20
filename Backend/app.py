from flask import Flask, request, jsonify, make_response
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from werkzeug.security import generate_password_hash
from werkzeug.security import check_password_hash
app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb+srv://subrat:nayak@cluster0.ccovhmt.mongodb.net/cineticket?retryWrites=true&w=majority'  # Replace with your MongoDB URI
mongo = PyMongo(app)

users_collection = mongo.db.users

@app.route('/')
def index():
    return 'Welcome to CineTicket'
@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    existing_user = users_collection.find_one({'email': data['email']})

    if existing_user:
        return jsonify({'message': 'Email already exists'}), 409

    # Hash the password before storing it
    data['password'] = generate_password_hash(data['password'])
    user_id = users_collection.insert_one(data).inserted_id
    return jsonify({'message': 'User created successfully', 'user_id': str(user_id)}), 201
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = users_collection.find_one({'email': data['email']})

    if not user:
        return jsonify({'message': 'User not found'}), 404

    if not check_password_hash(user['password'], data['password']):
        return jsonify({'message': 'Invalid credentials'}), 401

    return jsonify({'message': 'Login successful', 'user_id': str(user['_id'])}), 200

@app.route('/users', methods=['POST'])
def create_user():
    data = request.get_json()
    data['password'] = generate_password_hash(data['password'])
    user_id = users_collection.insert_one(data).inserted_id
    return jsonify({'message': 'User created successfully', 'user_id': str(user_id)}), 201

# Get all users
@app.route('/users', methods=['GET'])
def get_all_users():
    users = users_collection.find()
    result = []
    for user in users:
        result.append({
            'user_id': str(user['_id']),
            'name': user['name'],
            'email': user['email'],
            'role': user['role']
        })
    return jsonify(result), 200

# Get a specific user by ID
@app.route('/users/<string:user_id>', methods=['GET'])
def get_user(user_id):
    user = users_collection.find_one({'_id': ObjectId(user_id)})
    if user:
        return jsonify({
            'user_id': str(user['_id']),
            'name': user['name'],
            'email': user['email'],
            'role': user['role']
        }), 200
    return jsonify({'message': 'User not found'}), 404

# Update a user by ID
@app.route('/users/<string:user_id>', methods=['PUT'])
def update_user(user_id):
    data = request.get_json()
    updated_user = users_collection.find_one_and_update(
        {'_id': ObjectId(user_id)},
        {'$set': {'name': data['name'], 'email': data['email'], 'role': data['role']}},
        return_document=True
    )
    if updated_user:
        return jsonify({
            'user_id': str(updated_user['_id']),
            'name': updated_user['name'],
            'email': updated_user['email'],
            'role': updated_user['role']
        }), 200
    return jsonify({'message': 'User not found'}), 404

# Delete a user by ID
@app.route('/users/<string:user_id>', methods=['DELETE'])
def delete_user(user_id):
    result = users_collection.delete_one({'_id': ObjectId(user_id)})
    if result.deleted_count > 0:
        return jsonify({'message': 'User deleted successfully'}), 204
    return jsonify({'message': 'User not found'}), 404

if __name__ == '__main__':
    app.run(debug=True)
