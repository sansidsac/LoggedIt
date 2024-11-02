import React from 'react'
import LogEntryForm from './LogEntryForm'
import Notifications from './Notifications'

const RightSideComp = () => {
  return (
    <div className='border-l-2 border-l-[#b0b3af] h-screen mt-8 fixed flex flex-col justify-between'>
      <div>
        <LogEntryForm />
      </div>
      <div className="ml-6">
        <Notifications />
        <br /><br /><br /><br />
      </div>
    </div>
  )
}

export default RightSideComp