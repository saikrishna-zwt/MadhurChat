import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { blue, red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./card.css";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
    // You can add additional logic here for search functionality
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        boxShadow: "none",
        paddingInline: "15px",
        marginBottom: "20px",
      }}
    >
      <CardHeader
        sx={{ paddingInline: 0 }}
        avatar={
          <Avatar
            className="image2"
            sx={{ bgcolor: blue[100] }}
            aria-label="recipe"
          ></Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Mathew Anderson"
        subheader="Marketing Director"
      />

      <TextField
        fullWidth
        // variant="outlined"
        placeholder="Search contacts"
        value={searchText}
        onChange={handleSearchChange}
        InputProps={{
          startAdornment: <SearchIcon sx={{ color: "#888", marginRight: 1 }} />,
        }}
      />
    </Card>
  );
}

export default RecipeReviewCard;
