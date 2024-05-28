import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./home.css";

export default function Home() {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login"); // Redirect to login if no token found
      return;
    }

    axios
      .get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setProfile(response.data);
      })
      .catch((error) => {
        console.error(error);
        navigate("/login"); // Redirect to login on error
      });
  }, [navigate]);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {profile.username}</p>
      <p>Email: {profile.email}</p>
      {/* Render other profile information */}
    </div>
  );
}
