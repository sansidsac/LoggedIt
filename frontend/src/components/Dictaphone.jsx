// src/components/Dictaphone.jsx
import "regenerator-runtime/runtime";
import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Dictaphone = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition({
    lang: "en-US",
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    if (listening) {
      setIsDialogOpen(true);
    } else {
      setIsDialogOpen(false);
    }
  }, [listening]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  // Check if microphone is available
  const isMicrophoneAvailable = navigator.mediaDevices && navigator.mediaDevices.getUserMedia;

  if (!isMicrophoneAvailable) {
    return <span>No permission to access microphone.</span>;
  }

  const handleStartListening = () => {
    SpeechRecognition.startListening();
  };

  const handleStopListening = () => {
    SpeechRecognition.stopListening();
    setIsDialogOpen(false); // Close the dialog when stopping
  };

console.log("Listening state:", listening);
console.log("Current transcript:", transcript);

  return (
    <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={handleStartListening}>Start</button>
      <button onClick={handleStopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>

      {isDialogOpen && (
        <div style={dialogStyle}>
          <h2>Live Transcription</h2>
          <p>{transcript}</p>
          <button onClick={handleStopListening}>Close</button> {/* Optionally still keep the Close button */}
        </div>
      )}
    </div>
  );
};

// Simple dialog box styles
const dialogStyle = {
  position: 'fixed',
  top: '20%',
  left: '50%',
  transform: 'translate(-50%, -20%)',
  backgroundColor: 'white',
  padding: '20px',
  border: '1px solid black',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  zIndex: 1000,
};

export default Dictaphone;
