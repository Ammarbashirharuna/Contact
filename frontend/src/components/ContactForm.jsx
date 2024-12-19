import { useState } from "react";
const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();

    const data = {
      firstName,
      lastName,
      email,
    };
      const url = "http://127.0.0.1:5000/create_contac";
      const options = {
          method: "POST",
          headers: {
              "content-type":  "application/json"
          },
          body:JSON.stringify(data)
      }
      const response = await fetch(url, options)
      if (response.status !== 201 && response.status !== 200) {
          const data = await response.json()
          alert(data.messege)
      } else {
        //   suscceefull
      }
  };

  return (
    <form
  onSubmit={onSubmit}
  className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 space-y-4 border border-gray-200"
>
  <div>
    <label
      htmlFor="firstName"
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      First Name:
    </label>
    <input
      type="text"
      id="firstName"
      value={firstName}
      onChange={(e) => setFirstName(e.target.value)}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
      placeholder="Enter your first name"
    />
  </div>

  <div>
    <label
      htmlFor="lastName"
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      Last Name:
    </label>
    <input
      type="text"
      id="lastName"
      value={lastName}
      onChange={(e) => setLastName(e.target.value)}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
      placeholder="Enter your last name"
    />
  </div>

  <div>
    <label
      htmlFor="email"
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      Email:
    </label>
    <input
      type="email"
      id="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
      placeholder="Enter your email address"
    />
  </div>

  <button
    type="submit"
    className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
  >
    Create Contact
  </button>
</form>

  );
};
export default ContactForm;
