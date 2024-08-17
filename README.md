# Voice Transform

![Voice Transform UI](path_to_your_image_here)

Voice Transform is an innovative web app that allows you to convert speech from one language to another, transforming audio files into different languages with ease. Upload an MP3 audio file in any language, and the app will generate a translated MP3 file in the desired language. 

## How It Works

1. **Upload an Audio File:** Start by uploading an audio file in any of the supported formats.
2. **Speech-to-Text Conversion:** The audio is processed using WhisperAI, a cutting-edge speech-to-text model by OpenAI, to extract text in the original language.
3. **Translation:** The extracted text is translated into your desired language using the Google Cloud Translate API.
4. **Text-to-Speech Conversion:** The translated text is then converted into speech using OpenAI's `tts-1` model, generating an audio file in the chosen language.
5. **Download the Result:** The translated speech is available for download in MP3 format, with options to change the format to Opus, AAC, FLAC, WAV, or PCM.

## Features

- **Multi-Language Support:** Translate speech between the following languages:
  - English
  - Spanish
  - French
  - Urdu
  - Hindi
  - Japanese
  - Portuguese
  - Russian
  - Chinese
  - Arabic
  - Turkish
  - Vietnamese
  - Indonesian

- **Supported Input File Formats:** 
  - MP3, MP4, MPEG, MPGA, M4A, WAV, WEBM

- **Output File Formats:**
  - Default: MP3
  - Options: Opus, AAC, FLAC, WAV, PCM

## Limitations

> **Voice Cloning is not supported:** The app generates speech in one of OpenAI's supported voices, without replicating the original speaker's voice or accent.

> **Emotion Capture is not supported:** The generated speech does not convey emotions such as anger, worry, or joy.

## Tech Stack

- **Frontend:** React
- **Backend:** Flask
- **AI Models:**
  - Speech-to-Text: WhisperAI by OpenAI
  - Translation: Google Cloud Translate API
  - Text-to-Speech: `tts-1` by OpenAI

## Getting Started

### Prerequisites

To run this app locally, you will need:

- **Node.js and npm** (for the React frontend)
- **Python 3.7+** (for the Flask backend)
- **OpenAI API Key** (for WhisperAI and `tts-1` model)
- **Google Cloud API Key** (for Translation API)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/voice-transform.git
   cd voice-transform

2. **Install Dependencies:**
  *** For Frontend ***

    ```bash
    cd frontend
    npm install
    npm start
    
  *** For Backend ***

    ```bash
    pip install -r requirements.txt
    python Flask_Server.py

3. **Set up API Keys:**
   ***Add your OpenAI API Key and Google Cloud JSON key to a .env file in the backend.***


4. **Run the app:**
  -Upload your audio file via the web interface.
  -Select the language you want to translate the speech into.
  -Click on "Transform" and wait for the processing to complete.
  -Download the translated speech in your desired language as an MP3 file.

   

 
