import React from "react";
import { useState } from "react";
import "./home.css";

export default function Chat() {
  const [data, setData] = useState({
    chat: "",
  });

  const chatUser = (e) => {
    e.preventDefault();
  };
  return (
      <div class="chatbox">
        <input
          className="textchat"
          placeholder="Type in future destination..."
          type="text"
          id="homeChat"
          name="homeChat"
          value={data.chat}
          onChange={(e) => setData({ ...data, chat: e.target.value })}
          required
        />
      </div>
    
  );
}
