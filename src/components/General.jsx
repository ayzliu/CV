import React, { useState } from "react";

const General = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary actions with the form data
    console.log("Submitted:", name, email);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <>
          <h1>{name}</h1>
          <p>{email}</p>
          <button type="button" onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
};

export default General;