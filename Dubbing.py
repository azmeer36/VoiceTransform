from OpenAI_STT import speech_to_text
from OpenAI_TTS import text_to_speech
from Translate import translate_text
from pathlib import Path

def speech_to_speech( audio_file_path, input_language_code, target_language_code, output_file_name):
    
    if audio_file_path is None or input_language_code is None or target_language_code is None or output_file_name is None:
        return "All parameters are required"
    
    # audio_file_path = "input_files/sample_input1.mp3"
    # input_language_code = "en"
    # target_language_code = "ur"
    # output_file_name = "sample_output1.mp3"

    
    # Convert speech to text
    text = speech_to_text(audio_file_path, input_language_code)

    # Translate text to target language

    translated_text = translate_text(target_language_code, text)

    # Convert translated text to speech

    speech_file_path = Path(__file__).parent / "output_files" / output_file_name

    text_to_speech(translated_text, speech_file_path)
    
    return "Translation successful"





