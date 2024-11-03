import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="bg-[#d9dcd6] p-4 shadow-md shadow-[#b0b3af] fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-[#16425b] text-lg font-bold mr-4">
            <img src="../public/mobile-logo.png" alt="Logo" className="h-8 w-8"/>
          </Link>
          <Link to="/" className="text-[#16425b] text-lg font-bold">
            LoggedIT
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/history" className="text-[#16425b] hover:text-[#3a7ca5]">History</Link>
          <Link to="/insights" className="text-[#16425b] hover:text-[#3a7ca5]">Insights</Link>
          <Link to="/edit" className="text-[#16425b] hover:text-[#3a7ca5]">Edits</Link>
          <Link to="/" className="text-[#16425b] hover:text-[#3a7ca5]">
            <img src="../public/profile.jpg" alt="Profile" className="h-8 w-8 rounded-full"/>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar