import React, { useState } from 'react'

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const isInputFilled = inputValue.trim() !== '';

  return (
    <div className="flex items-center w-11/12 m-8 bg-[#d9dcd6] rounded-full border-2 border-[#b0b3af]">
      <input 
        type="text" 
        placeholder="Search..." 
        className="flex-grow p-2 rounded-l-full border-none focus:outline-none text-[#16425b] bg-[#d9dcd6]"
        onChange={handleInputChange}
      />
      <a 
        href="#" 
        className={`p-2 rounded-r-full transition duration-300 ${isInputFilled ? 'bg-[#3a7ca5] text-white hover:bg-[#16425b]' : 'bg-[#b0b3af] text-[#d9dcd6]'}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </a>
    </div>
  )
}

export default SearchBar