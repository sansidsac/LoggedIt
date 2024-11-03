import React from 'react'
import NotificationCard from './NotificationCard'

const Notifications = () => {
  const notifications = [
    { heading: 'System Update', description: 'A system update will be performed at 10:00 PM.' },
    { heading: 'Network Maintenance', description: 'Network maintenance is scheduled for 11:00 PM.' },
    // Add more notifications as needed
  ];

  return (
    <div>
      <h2 className="text-[#16425b] text-xl font-bold mb-4">Issues</h2>
      {notifications.map((notification, index) => (
        <NotificationCard 
          key={index}
          heading={notification.heading}
          description={notification.description}
        />
      ))}
    </div>
  )
}

export default Notifications