import React, { useState } from 'react'
import ModalComponent from './ModalComponent'

const NotificationCard = ({ heading, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div 
        className="bg-[#d9dcd6] p-2 rounded-lg shadow-md cursor-pointer mb-2 w-full"
        onClick={toggleModal}
      >
        <h2 className="text-[#16425b] text-sm font-bold">{heading}</h2>
      </div>
      {isModalOpen && (
        <ModalComponent heading={heading} description={description} onClose={toggleModal} />
      )}
    </>
  )
}

export default NotificationCard