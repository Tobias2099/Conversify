from flask import Flask, jsonify
import os
from . import generator, recognizer

def create_app():
    app = Flask(__name__)
    API_KEY = os.getenv('API_KEY')

    @app.route('/')
    def home():
        return f"Hi {API_KEY}"
    
    return app
