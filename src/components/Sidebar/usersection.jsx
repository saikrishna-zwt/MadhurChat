import React from "react";
import "./usersection.css"; // Import your CSS file for styling
import { Avatar } from "@mui/material";

const UserSection = ({ avatarSrc, username, message, time,image }) => {
  return (
    <div className="usersection">
      {/* <img src={avatarSrc} alt="" className="avatar" /> */}
      <Avatar
        className="image1"
        sx={{ bgcolor: "#2196f3" }}
        aria-label="recipe"
        src={image}
      
      />
      <div className="content">
        <p className="username">{username}</p>
        <p className="message">{message}</p>
      </div>
      <p className="time">{time}</p>
    </div>
  );
};

export default UserSection;
