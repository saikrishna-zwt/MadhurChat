import Header from "./components/Header/header";
import RecipeReviewCard from "./components/Card/Card";
import CardIcon from "./components/CardWithIcon/cardicon";
import ChatInput from "./components/ChatInput.js/chatInput";
import { Box, Container } from "@mui/material";
import ChatArea from "./components/ChatArea";
import Sidebar from "./components/Sidebar";
import ChatApplication from "./chatApp";
import MessageData from "./message.json";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMfSoVB45z-Lkx1HLxZ3IqaGfnGbHiMVk",
  authDomain: "chat-application-28e72.firebaseapp.com",
  projectId: "chat-application-28e72",
  storageBucket: "chat-application-28e72.appspot.com",
  messagingSenderId: "221168695195",
  appId: "1:221168695195:web:fd29f60b4246d9b644133e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  return (
    <Container maxWidth="xl" style={{ padding: 0 }}>
      <Header />

      <Box display="flex" height="100vh">
        <Sidebar initialData={MessageData.allUsers} />
        <ChatArea initialData={MessageData} />
        <ChatApplication initialData={MessageData} />
      </Box>
    </Container>
  );
}

export default App;
