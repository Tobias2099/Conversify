from gtts import gTTS
import os

def text_to_speech(text):
    tts = gTTS(text=text, lang='fr')
    tts.save("output.mp3")
    os.system("open output.mp3")
