import React from 'react'


const ContactList = ({ contacts }) => {
    return (
        <div className='overflow-x-auto'>
        <h2>Contact</h2>
        <table className='table-auto border-collapse border border-gray-200 w-full'>
            <thead className='bg-gray-100'>
                <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left">First name </th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Lastname</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Action</th>
                </tr>
                </thead>
                <tbody>
                    {contacts.map((contact) => (
                        <tr key={contact.id} className='bg-gray-50'>
                            <td className="border border-gray-300 px-4 py-2">{contact.firstName}</td>
                            <td className="border border-gray-300 px-4 py-2">{contact.lastName}</td>
                            <td className="border border-gray-300 px-4 py-2">{contact.email}</td>
                            <td className="border border-gray-300 px-4 py-2">
                                <button>Update</button>
                                <button>Delete</button>
                            </td>
                     </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default ContactList;
