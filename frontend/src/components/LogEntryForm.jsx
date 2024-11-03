import React, { useState } from 'react'
import axios from 'axios'

const LogEntryForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');
  const [isVoiceActive, setIsVoiceActive] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleTextareaChange = (e) => {
    setTextareaValue(e.target.value);
  };

  const toggleVoice = () => {
    setIsVoiceActive(!isVoiceActive);
  };

  const isFormFilled = inputValue.trim() !== '' && textareaValue.trim() !== '';

  const handleSubmit = async (e) => {
    e.preventDefault();
    const logData = {
      heading: inputValue,
      description: textareaValue,
      name: 'Jon Smith',
      designation: 'System Engineer',
      department: 'IT',
      datetime: new Date().toISOString()
    };

    try {
      const response = await axios.post('http://localhost:5000/logs', logData);
      console.log('Log entry added:', response.data);
      setInputValue('');
      setTextareaValue('');
    } catch (error) {
      console.error('Error adding log entry:', error);
    }
  };

  return (
    <div className="p-4 bg-[#d9dcd6] rounded-lg">
      <form className="space-y-1" onSubmit={handleSubmit}>
        <div>
          {/* <label className="block text-[#16425b] text-sm font-bold mb-2" htmlFor="heading">
            Heading
          </label> */}
          <input 
            type="text" 
            id="heading" 
            placeholder="Enter Heading" 
            className="w-full p-2 rounded border font-bold text-3xl bg-[#d9dcd6] border-[#d9dcd6] focus:outline-none focus:ring-2 focus:ring-[#d9dcd6]"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        <div>
          {/* <label className="block text-[#16425b] text-sm font-bold mb-2" htmlFor="log">
            Log
          </label> */}
          <textarea 
            id="log" 
            placeholder="Enter Log" 
            className="w-full h-96 p-2 rounded border font-semibold text-lg bg-[#d9dcd6] border-[#d9dcd6] focus:outline-none focus:ring-2 focus:ring-[#d9dcd6]"
            value={textareaValue}
            onChange={handleTextareaChange}
          />
        </div>
        <div className="flex justify-between items-center">
          <button 
            type="submit" 
            className={`p-2 ml-2 rounded transition duration-300 ${isFormFilled ? 'bg-[#3a7ca5] text-white hover:bg-[#16425b]' : 'bg-[#b0b3af] text-[#d9dcd6]'}`}
            disabled={!isFormFilled}
          >
            Add Entry
          </button>
          <button 
            type="button" 
            onClick={toggleVoice}
            className={`p-2 rounded-full transition duration-300 ${isVoiceActive ? 'bg-[#16425b] text-white' : 'bg-[#3a7ca5] text-white'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 1v11m0 0a4 4 0 004-4V5a4 4 0 00-8 0v3a4 4 0 004 4zm0 0v4m0 4h-4m4 0h4" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  )
}

export default LogEntryForm