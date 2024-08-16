import os
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from werkzeug.utils import secure_filename
from Dubbing import speech_to_speech

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = 'input_files'
OUTPUT_FOLDER = 'output_files'

ALLOWED_EXTENSIONS = {'mp3','mp4','wav'}

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS
           

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    file = request.files['file']
    input_language = request.form.get('inputLanguage')
    output_language = request.form.get('outputLanguage')
    
    
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    
    if file and allowed_file(file.filename) and input_language and output_language:
        
        filename = secure_filename(file.filename)
        input_path = os.path.join(UPLOAD_FOLDER, filename)
        output_filename = f"transformed_{filename}"
        
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        
        try:
            speech_to_speech(
                audio_file_path=input_path,
            input_language_code=input_language,
            target_language_code=output_language,
                output_file_name=output_filename
            )
        except Exception as e:
            return jsonify({'error': str(e)}), 500
        
        
        return jsonify({
            'message': 'File uploaded successfully',
            'inputFile': filename,
            'outputFile': output_filename  
        })
        
        
    return jsonify({'error': 'File type not allowed'}), 400



@app.route('/output_files/<filename>')
def serve_file(filename):
    return send_from_directory(OUTPUT_FOLDER, filename)



if __name__ == '__main__':
    app.run(debug=True, port=5000)
