import React from "react";
import { useState } from "react";

export default function Register() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const registerUser = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <div className="form-box">
        <h2>Register</h2>
        <form onSubmit={registerUser} id="registerForm">
          <label htmlFor="registerUsername">Username:</label>
          <input
            type="text"
            id="registerUsername"
            name="registerUsername"
            value={data.username}
            onChange={(e) => setData({ ...data, username: e.target.value })}
            required
          />

          <label htmlFor="registerEmail">Email:</label>
          <input
            type="email"
            id="registerEmail"
            name="registerEmail"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            required
          />

          <label htmlFor="registerPassword">Password:</label>
          <input
            type="password"
            id="registerPassword"
            name="registerPassword"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            required
          />

          <label htmlFor="registerConfirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="registerConfirmPassword"
            name="registerConfirmPassword"
            value={data.confirmPassword}
            onChange={(e) =>
              setData({ ...data, confirmPassword: e.target.value })
            }
            required
          />

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}
