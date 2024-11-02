import React from 'react'
import LogCard from './LogCard'

const MyLogs = () => {
  const logs = [
    {
      header: 'System Update',
      person: 'John Doe',
      designation: 'System Administrator',
      department: 'IT',
      date: '2023-10-01',
      time: '10:00 AM',
      description: 'Performed a system update on all servers.'
    },
    {
      header: 'Network Maintenance',
      person: 'Jane Smith',
      designation: 'Network Engineer',
      department: 'IT',
      date: '2023-10-02',
      time: '11:00 AM',
      description: 'Conducted routine network maintenance and updates.'
    },
    {
      header: 'Database Backup',
      person: 'Alice Johnson',
      designation: 'Database Administrator',
      department: 'IT',
      date: '2023-10-03',
      time: '12:00 PM',
      description: 'Completed a full backup of the company database.'
    },
    {
      header: 'Security Audit',
      person: 'Bob Brown',
      designation: 'Security Analyst',
      department: 'IT',
      date: '2023-10-04',
      time: '01:00 PM',
      description: 'Conducted a security audit and identified vulnerabilities.'
    }
  ];

  return (
    <div className="p-4">
      <h2 className="text-[#16425b] text-xl font-bold mb-4">My Logs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {logs.map((log, index) => (
          <LogCard
            key={index}
            header={log.header}
            person={log.person}
            designation={log.designation}
            department={log.department}
            date={log.date}
            time={log.time}
            description={log.description}
          />
        ))}
      </div>
    </div>
  )
}

export default MyLogs