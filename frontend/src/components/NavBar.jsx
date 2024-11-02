import React from 'react'

const NavBar = () => {
  return (
    <nav className="bg-[#d9dcd6] p-4 shadow-md shadow-[#b0b3af]">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-[#16425b] text-lg font-bold mr-4">
            <img src="../public/mobile-logo.png" alt="Logo" className="h-8 w-8"/>
          </a>
          <a href="#" className="text-[#16425b] text-lg font-bold">
            LoggedIT
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-[#16425b] hover:text-[#3a7ca5]">Home</a>
          <a href="#" className="text-[#16425b] hover:text-[#3a7ca5]">About</a>
          <a href="#" className="text-[#16425b] hover:text-[#3a7ca5]">Contact</a>
          <a href="#" className="text-[#16425b] hover:text-[#3a7ca5]">
            <img src="../public/profile.jpg" alt="Profile" className="h-8 w-8 rounded-full"/>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default NavBar