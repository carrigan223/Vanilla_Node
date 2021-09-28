import React from "react";
import { AppTitle, HeaderContainer, TodaysDate } from "./headerStyles.js";

const Header = ({date}) => {
  return (
    <HeaderContainer>
      <AppTitle>TaskTracker</AppTitle>
      <TodaysDate>{date}</TodaysDate>
    </HeaderContainer>
  );
};

export default Header;
