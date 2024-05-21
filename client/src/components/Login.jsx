import React from "react";
import { useState } from "react";

export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-box">
      <h2>Login</h2>
      <form id="loginForm" onSubmit={loginUser}>
        <label htmlFor="loginEmail">Email:</label>
        <input
          type="email"
          id="loginEmail"
          name="loginEmail"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          required
        />

        <label htmlFor="loginPassword">Password:</label>
        <input
          type="password"
          id="loginPassword"
          name="loginPassword"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
