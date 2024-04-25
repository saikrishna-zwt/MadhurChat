import Header from "./components/Header/header";
import RecipeReviewCard from "./components/Card/Card";
import CardIcon from "./components/CardWithIcon/cardicon";
import ChatInput from "./components/ChatInput.js/chatInput";
import { Box, Container } from "@mui/material";
import ChatArea from "./components/ChatArea";
import Sidebar from "./components/Sidebar";
import ChatApplication from "./chatApp";
import MessageData from "./message.json";

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
