import React from 'react'

const ModalComponent = ({ heading, description, onClose }) => {
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleIssueAddressed = () => {
    // Add logic to handle the issue addressed action here
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={handleBackgroundClick}
    >
      <div className="bg-white p-4 rounded-lg shadow-lg w-1/3">
        <h2 className="text-[#16425b] text-lg font-bold mb-2">{heading}</h2>
        <p className="text-[#16425b]">{description}</p>
        <div className="mt-4 flex justify-end space-x-2">
          <button 
            className="bg-[#3a7ca5] text-white p-2 rounded hover:bg-[#16425b] transition duration-300"
            onClick={onClose}
          >
            Close
          </button>
          <button 
            className="bg-[#3a7ca5] text-white p-2 rounded hover:bg-[#16425b] transition duration-300"
            onClick={handleIssueAddressed}
          >
            Issue Addressed
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModalComponent