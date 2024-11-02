import React, {useState} from 'react'

const LogEntryForm = () => {
    const [showButton, setShowButton] = useState(false);
    
    const handleInputChange = (e) => {
      if (e.target.value) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    
    return (
      <div className="p-4 bg-[#d9dcd6] rounded-lg">
        <form className="space-y-4">
          <div>
            <label className="block text-[#16425b] text-sm font-bold mb-2" htmlFor="heading">
              Heading
            </label>
            <input 
              type="text" 
              id="heading" 
              placeholder="Enter Heading" 
              className="w-full p-2 rounded border border-[#3a7ca5] focus:outline-none focus:ring-2 focus:ring-[#3a7ca5]"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block text-[#16425b] text-sm font-bold mb-2" htmlFor="log">
              Log
            </label>
            <textarea 
              id="log" 
              placeholder="Enter Log" 
              className="w-full p-2 rounded border border-[#3a7ca5] focus:outline-none focus:ring-2 focus:ring-[#3a7ca5]"
              onChange={handleInputChange}
            />
          </div>
          {showButton && (
            <button 
              type="submit" 
              className="bg-[#3a7ca5] text-white p-2 rounded hover:bg-[#16425b] transition duration-300"
            >
              Add Entry
            </button>
          )}
        </form>
      </div>
    )
}
     

export default LogEntryForm