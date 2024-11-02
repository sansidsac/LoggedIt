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
      <div className="pl-4 pr-4 bg-[#d9dcd6] rounded-lg">
        <form className="space-y-4">
          <div>
            {/* <label className="block text-[#16425b] text-sm font-bold mb-2" htmlFor="heading">
              
            </label> */}
            <input 
              type="text" 
              id="heading" 
              placeholder="Enter Heading" 
              className="w-full h- p-2 rounded border font-bold text-3xl bg-[#d9dcd6] border-[#d9dcd6] focus:outline-none focus:ring-2 focus:ring-[#d9dcd6]"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block text-[#16425b] text-sm font-bold mb-2" htmlFor="log">
              
            </label>
            <textarea 
              id="log" 
              placeholder="Enter Log" 
              className="w-full h-96 p-2 rounded border font-semibold text-lg bg-[#d9dcd6] border-[#d9dcd6]  focus:outline-none focus:ring-2 focus:ring-[#d9dcd6]"
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