import React from "react";
import { useState } from "react";
import axios from "axios";
import "./login.css";

export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = (e) => {
    e.preventDefault();
    try {
      const response = axios.get("/");
      console.log(response.data);
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <div className="form-box">
      <h2 className="title titleLogin">Login</h2>
      <form id="loginForm">
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
            className="submitButton submitButtonLogin"
            type="button"
            value="Register"
            onClick={loginUser}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
