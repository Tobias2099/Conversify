from flask import Flask, jsonify, request
from flask_cors import CORS
import os
from .recognizer import text_to_speech
from .generator import generate
from dotenv import load_dotenv



def create_app():
    app = Flask(__name__)
    CORS(app)

    load_dotenv()
    API_KEY = os.getenv('API_KEY')

    @app.route('/')
    def home():
        return f"Hi {API_KEY}"
    

    # This takes an object {text: "", conversation_history: []} and returns a json object of same type.
    @app.route('/process', methods=['POST'])
    def process():
        data = request.get_json()
        user_text = data['text']
        conversation_history = data['conversation_history']
        print(user_text, conversation_history)
        AI_Response, new_history = generate(user_text, conversation_history, API_KEY)
        return {'text': AI_Response, 'new_history': new_history}


    return app
