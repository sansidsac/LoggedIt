import React from 'react';
import AllLogs from './AllLogs';

const History = () => {
  return (
    <div className="p-4 mt-16 overflow-y-auto h-screen custom-scrollbar">
      <h2 className="text-[#16425b] text-xl font-bold mb-4">Historical Logs</h2>
      <p className="text-[#16425b] mb-4">Here you can find a collection of all historical logs.</p>
      <AllLogs />
      <br /><br />
    </div>
  );
};

export default History;