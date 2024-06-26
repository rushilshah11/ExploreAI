import { useState } from "react";
import axios from "axios";
import "./login.css";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = data;
    try {
      const { data } = await axios.post("/register", {
        username,
        email,
        password,
        confirmPassword,
      });

      if (data.error) {
        toast.error(data.error);
      } else{
        setData({});
        toast.success("Register Successful! Welcome");
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="form-box">
        <h2 className="title">Create Account</h2>
        <form onSubmit={registerUser} id="registerForm">
          <div className="textbox">
            <input
              className="registerusername"
              placeholder="Username"
              type="text"
              id="registerUsername"
              name="registerUsername"
              value={data.username}
              onChange={(e) => setData({ ...data, username: e.target.value })}
              required
            />
          </div>

          <div className="textbox">
            <input
              className="registeremail"
              placeholder="Email"
              type="email"
              id="registerEmail"
              name="registerEmail"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              required
            />
          </div>

          <div className="textbox">
            <input
              className="registerpassword"
              placeholder="Password"
              type="password"
              id="registerPassword"
              name="registerPassword"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              required
            />
          </div>

          <div className="textbox">
            <input
              className="registerconfirm"
              placeholder="Confirm Password"
              type="password"
              id="registerConfirmPassword"
              name="registerConfirmPassword"
              value={data.confirmPassword}
              onChange={(e) =>
                setData({ ...data, confirmPassword: e.target.value })
              }
              required
            />
          </div>

          <div className="button-wrapper">
            <button
              className="submitButton"
              onClick={registerUser}
              type="button"
              value="Register"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
