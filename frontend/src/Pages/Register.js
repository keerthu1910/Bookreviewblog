import React, { useState } from "react";
import axios from "axios";

export const Register = () => {
  const [newuser, setNewuser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleRegister = () => {
    axios
      .post(`${process.env.REACT_APP_URL}register`, newuser)
      .then((res) => console.log(res.data))
      .catch(err=>console.log(err))
  };
  return (
    <div>
      <h1>Register</h1>
      <label for="username">Username</label>
      <input
        type="text"
        id="username"
        placeholder="Username"
        onChange={(e) => setNewuser({ ...newuser, username: e.target.value })}
        value={newuser.username}
      />
      <label for="email">Email</label>
      <input
        type="text"
        id="email"
        placeholder="Email"
        onChange={(e) => setNewuser({ ...newuser, email: e.target.value })}
        value={newuser.email}
      />
      <label for="password">Password</label>
      <input
        type="password"
        id="password"
        placeholder="password"
        onChange={(e) => setNewuser({ ...newuser, password: e.target.value })}
        value={newuser.password}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};
