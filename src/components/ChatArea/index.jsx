import React, { useState } from "react";
import CardIcon from "../CardWithIcon/cardicon";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";

const ChatArea = ({ initialData }) => {
  const [userData, setUserData] = useState(initialData);

  const sendMessage = (text) => {
    const newMessage = {
      id: userData.messages.length + 1,
      text,
      sender: userData.userMeta.id.toString(),
      createAt: new Date().toISOString(),
    };

    setUserData({
      ...userData,
      messages: [...userData.messages, newMessage],
    });
  };

  return (
    <div
      style={{
        width: "50%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingLeft: "10px",
      }}
    >
      <div style={{ flex: 1 }}>
        <CardIcon
          image="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
          name="Madhuri"
          title="Andrew Johnson"
        />
        <ChatMessages messages={userData.messages} />
      </div>
      <ChatInput sendMessage={sendMessage} />
    </div>
  );
};

export default ChatArea;
