import React, { useState } from "react";

const EditForm = ({ item, updateItem }) => {
  const [newFname, setNewFname] = useState(item.first_name);
  const [newLname, setNewLname] = useState(item.last_name);
  const [newEmail, setNewEmail] = useState(item.email);
  const [newPhone, setNewPhone] = useState(item["phone no"]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateItem(newFname, newLname, newEmail, newPhone, item.id);
    setNewFname("");
    setNewLname("");
    setNewEmail("");
    setNewPhone("");
  };
  console.log(newFname, newLname);
  return (
    <div className="max-w-3xl mx-auto my-10 bg-white p-6 rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="text-gray-500 font-medium">ID: {item.id}</div>

        <div>
          <input
            value={newFname}
            placeholder="Enter a new name"
            type="text"
            onChange={(e) => setNewFname(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <input
            value={newFname}
            placeholder="Enter a new Fname"
            type="text"
            onChange={(e) => setNewLname(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <input
            value={newLname}
            placeholder="Enter a new Lname"
            type="text"
            onChange={(e) => setNewLname(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <input
            value={newEmail}
            placeholder="Enter new Email"
            type="email"
            onChange={(e) => setNewEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <input
            value={newPhone}
            placeholder="Enter new phone Number"
            type="text"
            onChange={(e) => setNewPhone(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
