import React from "react";
import { useState } from "react";
import "./login.css";

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
      <h2 className="loginfont">Login</h2>
      <form id="loginForm" onSubmit={loginUser}>
        <label className="loginemailfont" htmlFor="loginEmail">
          Email:
        </label>
        <input
          className="loginemailbox"
          type="email"
          id="loginEmail"
          name="loginEmail"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          required
        />

        <label className="loginpasswordfont" htmlFor="loginPassword">
          Password:
        </label>
        <input
          className="loginpasswordbox"
          type="password"
          id="loginPassword"
          name="loginPassword"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
          required
        />

        <button className="loginbutton" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
