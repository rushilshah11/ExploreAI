import React from "react";
import { useState } from "react";
import "./register.css";
export default function Register() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const registerUser = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="form-box">
        <h2 className="register">Register</h2>
        <form onSubmit={registerUser} id="registerForm">
          <label className="registerusernamefont" htmlFor="registerUsername">
            Username:
          </label>
          <input
            className="registerusername"
            type="text"
            id="registerUsername"
            name="registerUsername"
            value={data.username}
            onChange={(e) => setData({ ...data, username: e.target.value })}
            required
          />

          <label className="registeremailfont" htmlFor="registerEmail">
            Email:
          </label>
          <input
            className="registeremail"
            type="email"
            id="registerEmail"
            name="registerEmail"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            required
          />

          <label className="registerpasswordfont" htmlFor="registerPassword">
            Password:
          </label>
          <input
            className="registerpassword"
            type="password"
            id="registerPassword"
            name="registerPassword"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            required
          />

          <label
            className="registerconfirmfont"
            htmlFor="registerConfirmPassword"
          >
            Confirm Password:
          </label>
          <input
            className="registerconfirm"
            type="password"
            id="registerConfirmPassword"
            name="registerConfirmPassword"
            value={data.confirmPassword}
            onChange={(e) =>
              setData({ ...data, confirmPassword: e.target.value })
            }
            required
          />

          <button className="registerbutton" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
