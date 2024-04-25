import { Box } from "@mui/material";
import React from "react";
import RecipeReviewCard from "../Card/Card";
import UserMenu from "./UserMenu";

const Sidebar = ({ initialData }) => {
  return (
    <Box borderRight="1px solid #f5f5f5">
      <RecipeReviewCard />

      <UserMenu allUsers={initialData} />
    </Box>
  );
};

export default Sidebar;
