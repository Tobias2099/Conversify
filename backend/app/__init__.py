from flask import Flask
import os

def create_app():
    app = Flask(__name__)
    app.config['API_KEY'] = os.getenv('API_KEY')
    
    with app.app_context():
        from . import generator, recognizer
        # Register blueprints or initialize parts of the app
        
    return app