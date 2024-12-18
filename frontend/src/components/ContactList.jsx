import React from 'react';

const ContactList = ({ contacts }) => {
  return (
    <div className="overflow-x-auto py-8 px-4 mx-auto max-w-7xl">
      <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">Contact List</h2>
      
      <div className="bg-white shadow-lg rounded-lg border border-gray-300 overflow-hidden">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-sm font-semibold text-left text-gray-700">First Name</th>
              <th className="px-6 py-3 text-sm font-semibold text-left text-gray-700">Last Name</th>
              <th className="px-6 py-3 text-sm font-semibold text-left text-gray-700">Email</th>
              <th className="px-6 py-3 text-sm font-semibold text-left text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id} className="hover:bg-gray-50 transition duration-200">
                <td className="px-6 py-4 text-sm text-gray-700">{contact.firstName}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{contact.lastName}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{contact.email}</td>
                <td className="px-6 py-4 text-sm">
                  <div className="flex justify-start gap-3">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400">
                      Update
                    </button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-md text-sm hover:bg-red-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-400">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactList;
