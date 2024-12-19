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
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="LastName">LastName:</label>
        <input
          type="text"
          id="firstName"
          value={lastName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <button type="submit" className="py-10 px-5 bg-indigo-700">
        Create Contact
      </button>
    </form>
  );
};
export default ContactForm;
