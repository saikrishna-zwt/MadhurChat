import React, { useState } from "react";
import UserMenu from "./components/Sidebar/UserMenu";
import ChatMessages from "./components/ChatArea/ChatMessages";
import ChatInput from "./components/ChatInput.js/chatInput";
import Media from "./components/Media/Media";
import Files from "./components/Files/Files";

const ChatApplication = ({ initialData }) => {
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
      className="chat-app"
      style={{
        paddingInline: "25px",
        borderLeft: "1px solid #f5f5f5",
        width: "340px",
      }}
    >
      {/* <UserMenu allUsers={userData.allUsers} /> */}
      {/* <ChatMessages messages={userData.messages} /> */}
      {/* <ChatInput sendMessage={sendMessage} /> */}
      <Media />
      <Files />
    </div>
  );
};

export default ChatApplication;
