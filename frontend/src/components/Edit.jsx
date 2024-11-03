import React, { useState } from 'react';

const Edit = () => {
  const [log, setLog] = useState({
    heading: 'System Update',
    description: 'Performed a system update on all servers. The update included security patches, performance improvements, and bug fixes. The process took approximately 2 hours and was completed successfully without any downtime.',
    name: 'John Doe',
    designation: 'System Administrator',
    department: 'IT',
    datetime: '2023-10-01T10:00:00Z'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLog({ ...log, [name]: value });
  };

  return (
    <div className="p-4 mt-16 overflow-y-auto h-screen custom-scrollbar">
      <h2 className="text-[#16425b] text-xl font-bold mb-4">Edit Log</h2>
      <p className="text-[#16425b] mb-4">Here you can edit the selected log entry.</p>
      
      <div className="mb-8">
        <label className="block text-[#16425b] text-sm font-bold mb-2" htmlFor="heading">
          Heading
        </label>
        <input
          type="text"
          id="heading"
          name="heading"
          value={log.heading}
          onChange={handleInputChange}
          className="w-full p-2 rounded border font-bold text-3xl bg-[#d9dcd6] border-[#d9dcd6] focus:outline-none focus:ring-2 focus:ring-[#d9dcd6]"
        />
      </div>

      <div className="mb-8">
        <label className="block text-[#16425b] text-sm font-bold mb-2" htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={log.description}
          onChange={handleInputChange}
          className="w-full h-96 p-2 rounded border font-semibold text-lg bg-[#d9dcd6] border-[#d9dcd6] focus:outline-none focus:ring-2 focus:ring-[#d9dcd6]"
        />
      </div>

      <div className="mb-8">
        <label className="block text-[#16425b] text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={log.name}
          onChange={handleInputChange}
          className="w-full p-2 rounded border font-semibold text-lg bg-[#d9dcd6] border-[#d9dcd6] focus:outline-none focus:ring-2 focus:ring-[#d9dcd6]"
        />
      </div>

      <div className="mb-8">
        <label className="block text-[#16425b] text-sm font-bold mb-2" htmlFor="designation">
          Designation
        </label>
        <input
          type="text"
          id="designation"
          name="designation"
          value={log.designation}
          onChange={handleInputChange}
          className="w-full p-2 rounded border font-semibold text-lg bg-[#d9dcd6] border-[#d9dcd6] focus:outline-none focus:ring-2 focus:ring-[#d9dcd6]"
        />
      </div>

      <div className="mb-8">
        <label className="block text-[#16425b] text-sm font-bold mb-2" htmlFor="department">
          Department
        </label>
        <input
          type="text"
          id="department"
          name="department"
          value={log.department}
          onChange={handleInputChange}
          className="w-full p-2 rounded border font-semibold text-lg bg-[#d9dcd6] border-[#d9dcd6] focus:outline-none focus:ring-2 focus:ring-[#d9dcd6]"
        />
      </div>

      <div className="mb-8">
        <label className="block text-[#16425b] text-sm font-bold mb-2" htmlFor="datetime">
          Date and Time
        </label>
        <input
          type="datetime-local"
          id="datetime"
          name="datetime"
          value={log.datetime}
          onChange={handleInputChange}
          className="w-full p-2 rounded border font-semibold text-lg bg-[#d9dcd6] border-[#d9dcd6] focus:outline-none focus:ring-2 focus:ring-[#d9dcd6]"
        />
      </div>

      <button
        type="button"
        className="bg-[#3a7ca5] text-white p-2 rounded hover:bg-[#16425b] transition duration-300"
      >
        Save Changes
      </button>
    </div>
  );
};

export default Edit;