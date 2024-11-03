import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MyLogCard from './MyLogCard'

const MyLogs = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/logs');
        const filteredLogs = response.data.filter(log => log.name === 'Jon Smith');
        setLogs(filteredLogs);
      } catch (error) {
        console.error('Error fetching logs:', error);
      }
    };

    fetchLogs();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-[#16425b] text-xl font-bold mb-4">My Logs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {logs.map((log, index) => (
          <MyLogCard
            key={index}
            header={log.heading}
            date={new Date(log.datetime).toLocaleDateString()}
            time={new Date(log.datetime).toLocaleTimeString()}
            description={log.description}
          />
        ))}
      </div>
    </div>
  )
}

export default MyLogs