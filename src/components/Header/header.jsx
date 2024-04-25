import React from "react";
import "./header.css";
import { Box } from "@mui/material";

const Header = () => {
  return (
    <Box className="header">
      <div>
        <div className="app-details">
          <h1 className="chat">Chat Application</h1>
          <div className="dashdiv">
            <p>Dashboard</p>
            <span>&bull;</span>
            <p>Chats</p>
          </div>
        </div>
        <div className="image">
          <img
            src="https://s3-alpha-sig.figma.com/img/2191/7986/98cdd9315f91bc479f0ea8f464cb006f?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JXsakPr83WLOWXg~lZSePhTk0W6FVtDY2lYzMdmS2RhhRj2hPxEkkpdqpF48RcD7RglFAKi59AE-QOLjBNCN26zxUKeK7vfKJ1HIycD4GXLdEnAe3Xq5DgfCC8o8jIhtaox-6DtyDCJ0bedIZHQzuTyJDXhfjoqChHMtVdhSClcN8NP~yQGEursBLbXRzg29QOSHZ5dskfK27HAbvyUoqEqVxoDTANK9apxlv5xdsfR-L3ke1Qmd2lxH5m8sMAevSQy9CgKW8qMf7SXTRFVktoQwvzjpivnTdq5Is9FXRE3N08s502Z9-iB-5wDk~zAGB3coJLuG9SMoOYxGN96EGg__"
            alt="image"
          />
        </div>
      </div>
    </Box>
  );
};

export default Header;
