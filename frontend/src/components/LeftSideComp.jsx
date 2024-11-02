import React from 'react'
import SearchBar from './SearchBar'
import MyLogs from './MyLogs'
import AllLogs from './AllLogs'

const LeftSideComp = () => {
  return (
    <div className="my-4 overflow-y-auto h-screen custom-scrollbar">
      <div className="flex justify-center">
        <SearchBar />
      </div>
      <div className="mt-4 mx-5">
        <AllLogs />
      </div>
      <div className="mt-4 mx-5">
        <MyLogs />
      </div>
    </div>
  )
}

export default LeftSideComp