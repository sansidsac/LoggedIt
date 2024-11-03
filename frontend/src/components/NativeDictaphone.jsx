import React, { useState, useEffect } from 'react';

const NativeDictaphone = () => {
  const [transcript, setTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState(null);
  const [silenceTimeout, setSilenceTimeout] = useState(null);
  const SILENCE_TIMEOUT_MS = 5000; // 5 seconds

  const startRecognition = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Sorry, your browser does not support speech recognition.");
      return;
    }

    const newRecognition = new SpeechRecognition();
    newRecognition.lang = 'en-US';
    newRecognition.interimResults = true;

    newRecognition.onresult = (event) => {
      const currentTranscript = Array.from(event.results)
        .map(result => result[0].transcript)
        .join('');
      setTranscript(currentTranscript);
      resetSilenceTimeout(); // Reset on new input
    };

    newRecognition.onerror = (event) => {
      console.error("Speech recognition error", event);
      if (event.error === 'network') {
        alert("Network error: Please check your internet connection.");
      }
    };

    newRecognition.onstart = () => {
      setIsListening(true);
      resetSilenceTimeout(); // Start the silence timeout when recognition starts
    };

    newRecognition.onend = () => {
      setIsListening(false);
      clearTimeout(silenceTimeout); // Clear timeout when recognition ends
    };

    newRecognition.start();
    setRecognition(newRecognition);
  };

  const stopRecognition = () => {
    if (recognition) {
      recognition.stop();
    }
  };

  const resetSilenceTimeout = () => {
    clearTimeout(silenceTimeout);
    setSilenceTimeout(setTimeout(() => {
      stopRecognition();
      alert("Stopped listening due to inactivity.");
    }, SILENCE_TIMEOUT_MS));
  };

  return (
    <div>
      <p>Microphone: {isListening ? 'on' : 'off'}</p>
      <button onClick={startRecognition}>Start Listening</button>
      <button onClick={stopRecognition}>Stop Listening</button>
      <p>{transcript}</p>
    </div>
  );
};

export default NativeDictaphone;
