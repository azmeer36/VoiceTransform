from cgitb import text
import os
from pathlib import Path
from openai import OpenAI


client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
speech_file_path = Path(__file__).parent / "input_files" / "sample_input1.mp3"


def text_to_speech(text: str, speech_file_path):
  response = client.audio.speech.create(
    model="tts-1",
    voice="alloy",
    input=text)

  response.stream_to_file(speech_file_path)
  
# text_to_speech("""In a quiet village, a red rose grew in the middle of winter. 
#                The villagers, surprised by its beauty, gathered to see it. 
#                No one knew how it grew in the cold, but they believed it was a sign 
#                of hope—that even in tough times, something beautiful can still live.""", speech_file_path) 