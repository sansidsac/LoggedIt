import React, { useState } from 'react'
import SearchBar from './SearchBar'
import MyLogs from './MyLogs'
import AllLogs from './AllLogs'
import LogCard from './LogCard'
import dummyLogs from '../data/dummyLogs.json'

const LeftSideComp = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    if (query.trim() !== '') {
      const results = dummyLogs.filter(log =>
        log.heading.toLowerCase().includes(query.toLowerCase()) ||
        log.description.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="overflow-y-auto h-screen custom-scrollbar">
      <div className="flex justify-center">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="mt-2 mx-5">
        {searchResults.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {searchResults.map((log, index) => (
              <LogCard
                key={index}
                header={log.heading}
                person={log.name}
                designation={log.designation}
                department={log.department}
                date={new Date(log.datetime).toLocaleDateString()}
                time={new Date(log.datetime).toLocaleTimeString()}
                description={log.description}
              />
            ))}
          </div>
        ) : (
          <>
            <div className="mt-1 mx-5">
              <AllLogs />
            </div>
            <div className="mt-4 mx-5">
              <MyLogs />
            </div>
          </>
        )}
      </div>
      <br /><br />
    </div>
  )
}

export default LeftSideComp