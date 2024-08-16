from openai import OpenAI
client = OpenAI()


def speech_to_text( audio_file_path: str , input_language_code: str):  
    audio_file = open(audio_file_path, "rb")
    transcript = client.audio.transcriptions.create(
    model="whisper-1",
    file=audio_file,
    language = input_language_code
    )
    
    return transcript.text
