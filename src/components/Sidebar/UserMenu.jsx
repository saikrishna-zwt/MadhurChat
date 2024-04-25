import React from "react";
import "./usermenu.css";
import UserSection from "./usersection";

const UserMenu = ({ allUsers }) => {
  return (
    <div className="user-menu">
      <div className="user-list">
        <h4
          style={{
            fontWeight: "normal",
            paddingBlock: "20px",
            paddingInline: "15px",
            display: "flex",
            gap: "10px",
            alignItems: "center",
            color: "#828282",
            fontWeight: "medium",
          }}
        >
          Recent Chats<i class="gg-chevron-down"></i>
        </h4>
        <div className="scrollable-container">
          {allUsers?.map((user) => (
            <UserSection
              key={user.id}
              avatarSrc={user.avatar}
              username={user.name}
              message={user.lastMessageConfig.message}
              time="10:30 minutes" // You can use a formatted time here
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// const UserMenu = () => {
//   return (
//     <div className="box">
//       <div className="boxsection">
//         <p className="recent">Recent Chats</p>
//         <p>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="22"
//             height="22"
//             viewBox="0 0 22 22"
//             fill="none"
//           >
//             <path
//               d="M11 13.7958L5.82083 8.59376L6.78333 7.63126L11 11.8479L15.2167 7.63126L16.1792 8.59376L11 13.7958Z"
//               fill="#7C8FAC"
//             />
//           </svg>
//         </p>
//       </div>

//       <div className="scrollable-container">
//         <UserSection
//           avatarSrc="path_to_avatar.jpg"
//           username="John Doe"
//           message="Hello there!"
//           time="10:30 minutes"
//         />
//         {/* Add more UserSection components with different props as needed */}
//         <UserSection
//           avatarSrc="path_to_another_avatar.jpg"
//           username="Jane Smith"
//           message="Hi John!"
//           time="11:00 minutes"
//         />

//         <UserSection
//           avatarSrc="path_to_another_avatar.jpg"
//           username="Jane Smith"
//           message="Hi John!"
//           time="11:00 minutes"
//         />

//         <UserSection
//           avatarSrc="path_to_another_avatar.jpg"
//           username="Jane Smith"
//           message="Hi John!"
//           time="11:00 minutes"
//         />

//         <UserSection
//           avatarSrc="path_to_another_avatar.jpg"
//           username="Jane Smith"
//           message="Hi John!"
//           time="11:00 AM"
//         />
//          <UserSection
//           avatarSrc="path_to_another_avatar.jpg"
//           username="Jane Smith"
//           message="Hi John!"
//           time="11:00 AM"
//         />
//          <UserSection
//           avatarSrc="path_to_another_avatar.jpg"
//           username="Jane Smith"
//           message="Hi John!"
//           time="11:00 AM"
//         />
//          <UserSection
//           avatarSrc="path_to_another_avatar.jpg"
//           username="Jane Smith"
//           message="Hi John!"
//           time="11:00 AM"
//         />
//       </div>
//     </div>
//   );
// };

export default UserMenu;
