import React from 'react';

const ContactList = ({ contacts }) => {
  return (
    <div className="overflow-x-auto">
      <h2 className="text-lg font-bold mb-4">Contact</h2>
      <table className="table-auto border-collapse border border-gray-300 w-full my-4">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">First Name</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Last Name</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id} className="bg-gray-50 hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">{contact.firstName}</td>
              <td className="border border-gray-300 px-4 py-2">{contact.lastName}</td>
              <td className="border border-gray-300 px-4 py-2">{contact.email}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600">
                  Update
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
