import React, { useState } from 'react'

const LogCard = ({ header, person, designation, department, date, time, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div 
      className="bg-[#d9dcd6] p-4 rounded-lg shadow-md cursor-pointer mb-4" 
      onClick={toggleExpand}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-[#16425b] text-lg font-bold">{header}</h2>
        <span className="text-sm text-[#3a7ca5]">{date} {time}</span>
      </div>
      <div className="text-[#16425b] mt-2">
        <p><strong>Person:</strong> {person}</p>
        <p><strong>Designation:</strong> {designation}</p>
        <p><strong>Department:</strong> {department}</p>
      </div>
      {isExpanded && (
        <div className="mt-4 text-[#16425b]">
          <p><strong>Description:</strong> {description}</p>
        </div>
      )}
    </div>
  )
}

export default LogCard