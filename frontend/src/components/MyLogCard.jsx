import React from 'react'

const MyLogCard = ({ header, date, time, description }) => {
  return (
    <div 
      className="bg-[#d9dcd6] p-4 rounded-lg shadow-md mb-4"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-[#16425b] text-lg font-bold">{header}</h2>
        <span className="text-sm text-[#3a7ca5]">{date} {time}</span>
      </div>
      <div className="mt-4 text-[#16425b]">
        <p><strong>Description:</strong> {description}</p>
      </div>
    </div>
  )
}

export default MyLogCard