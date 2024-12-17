import React from 'react';

const ContactList = ({ contacts }) => {
  return (
    <div className="overflow-x-auto py-8 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Contact List</h2>
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="table-auto w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="border-t border-b border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-600">First Name</th>
              <th className="border-t border-b border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-600">Last Name</th>
              <th className="border-t border-b border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-600">Email</th>
              <th className="border-t border-b border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-600">Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id} className="hover:bg-gray-50">
                <td className="border-b border-gray-200 px-4 py-2 text-sm text-gray-700">{contact.firstName}</td>
                <td className="border-b border-gray-200 px-4 py-2 text-sm text-gray-700">{contact.lastName}</td>
                <td className="border-b border-gray-200 px-4 py-2 text-sm text-gray-700">{contact.email}</td>
                <td className="border-b border-gray-200 px-4 py-2 text-sm">
                  <div className="flex justify-start gap-2">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                      Update
                    </button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-md text-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">
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
