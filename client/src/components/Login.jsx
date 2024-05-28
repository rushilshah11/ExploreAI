import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const response = await axios.post("/login", {
        email,
        password,
      });

      if (response.data.error) {
        toast.error(data.error);
      } else {
        localStorage.setItem("token", response.data.token); // Store the token in localStorage
        localStorage.setItem("user", JSON.stringify(response.data.user)); // Store user data in localStorage
        setData({ email: "", password: "" });
        toast.success("Login Successful! Welcome");
        navigate("/");
      }
    } catch (err) {
      console.log(err);
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
