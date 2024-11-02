import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#16425b] p-6 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <img src="../public/mobile-logo.png" alt="Logo" className="h-12 w-12 mr-3"/>
          <span className="text-xl font-bold">LoggedIT</span>
        </div>
        <div className="text-center md:text-left">
          <p>&copy; 2023 LoggedIT. All rights reserved.</p>
          <p>Contact us: <a href="mailto:kssanju04@gmail.com" className="text-[#3a7ca5] hover:underline">contact@loggedit.com</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer