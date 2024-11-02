import React from 'react'

const SearchBar = () => {
  return (
    <div className="flex items-center w-11/12 m-8 bg-[#d9dcd6] border-2 border-[#b0b3af] rounded-full">
      <input 
        type="text" 
        placeholder="Search..." 
        className="flex-grow p-2 rounded-l-full border-none focus:outline-none text-white bg-[#d9dcd6]"
      />
      <a href="#" className="bg-[#3a7ca5] hover:bg-[#16425b] p-2 rounded-r-full text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </a>
    </div>
  )
}

export default SearchBar