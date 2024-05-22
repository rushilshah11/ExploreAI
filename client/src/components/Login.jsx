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
      <h2 className="title titleLogin">Login</h2>
      <form id="loginForm" onSubmit={loginUser}>
        <div className="textbox">
          <input
            className="loginemailbox"
            placeholder="Email"
            type="email"
            id="loginEmail"
            name="loginEmail"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            required
          />
        </div>

        <div className="textbox">
          <input
            className="loginpasswordbox"
            placeholder="Password"
            type="password"
            id="loginPassword"
            name="loginPassword"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            required
          />
        </div>

        <div className="button-wrapper">
          <button
            class="submitButton submitButtonLogin"
            type="button"
            value="Register"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
