import React from 'react'

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-white text-lg font-bold mr-4">
            <img src="logo.png" alt="Logo" className="h-8 w-8"/>
          </a>
          <a href="#" className="text-white text-lg font-bold">
            Company Name
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-white hover:text-gray-400">Home</a>
          <a href="#" className="text-white hover:text-gray-400">About</a>
          <a href="#" className="text-white hover:text-gray-400">Contact</a>
          <a href="#" className="text-white hover:text-gray-400">
            <img src="profile-icon.png" alt="Profile" className="h-8 w-8 rounded-full"/>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default NavBar