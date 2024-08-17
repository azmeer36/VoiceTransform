import React, { useState } from 'react';
import './HomePage.css';
import axios from 'axios';

function HomePage() {
  const [inputFile, setInputFile] = useState(null);
  const [inputLanguage, setInputLanguage] = useState('');
  const [outputLanguage, setOutputLanguage] = useState('');
  const [outputFile, setOutputFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // New state for loading

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputFile) {
      alert('Please select a file to upload');
      return;
    }

    setIsLoading(true); // Set loading to true when starting the transformation

    const formData = new FormData();
    formData.append('file', inputFile);
    formData.append('inputLanguage', inputLanguage);
    formData.append('outputLanguage', outputLanguage);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
      console.log(response.data.outputFile);
      setOutputFile(`http://localhost:5000/output_files/${response.data.outputFile}`);
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading file. Please try again.');
    } finally {
      setIsLoading(false); // Set loading to false when the process is complete
    }
  };

  return (
    <div className="home-page">
      <div className="background-overlay"></div>
      <header className="header">
        <div className="logo">VoiceTransform</div>
        <nav className="nav-menu">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      
      <main>
        <section className="hero">
          <h1>VoiceTransform</h1>
          <h2>Transform Speech Across Languages</h2>
          <p>Upload an audio file, select languages, and get your transformed speech in seconds!</p>
        </section>
        
        <section className="transform-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="file-upload">Upload MP3 File</label>
              <input 
                type="file" 
                id="file-upload" 
                accept=".mp3" 
                onChange={(e) => setInputFile(e.target.files[0])}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="input-language">Input Language</label>
              <select 
                id="input-language" 
                value={inputLanguage} 
                onChange={(e) => setInputLanguage(e.target.value)}
                required
                className="language-select"
              >
                <option value="">Select language</option>
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="ur">Urdu</option>
                <option value="hi">Hindi</option>
                <option value="ja">Japanese</option>
                <option value="pt">Portuguese</option>
                <option value="ru">Russian</option>
                <option value="zh">Chinese</option>
                <option value="ar">Arabic</option>
                <option value="tr">Turkish</option>
                <option value="vi">Vietnamese</option>
                <option value="id">Indonesian</option>
                {/* Add more language options */}
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="output-language">Output Language</label>
              <select 
                id="output-language" 
                value={outputLanguage} 
                onChange={(e) => setOutputLanguage(e.target.value)}
                required
                className="language-select"
              >
                <option value="">Select language</option>
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="ur">Urdu</option>
                <option value="hi">Hindi</option>
                <option value="ja">Japanese</option>
                <option value="pt">Portuguese</option>
                <option value="ru">Russian</option>
                <option value="zh">Chinese</option>
                <option value="ar">Arabic</option>
                <option value="tr">Turkish</option>
                <option value="vi">Vietnamese</option>
                <option value="id">Indonesian</option>
                {/* Add more language options */}
              </select>
            </div>
            
            <button type="submit" className="submit-btn" disabled={isLoading}>
              {isLoading ? 'Transforming...' : 'Transform'}
            </button>
          </form>
        </section>
        
        {isLoading && (
          <div className="loading-indicator">
            <div className="spinner"></div>
            <p>Transforming speech, please wait...</p>
          </div>
        )}
        
        {outputFile && !isLoading && (
          <section className="output-section">
            <h3>Transformed Audio</h3>
            <audio controls src={outputFile}></audio>
            <a href={outputFile} download className="download-btn">Download</a>
          </section>
        )}
      </main>
      
      <footer>
        <p>&copy; 2024 VoiceTransform. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;