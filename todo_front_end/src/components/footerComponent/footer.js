import React from "react";
import {
  FooterGithubLink,
  StyledFoooterText,
  StyledFooterContainer,StyledFaGithub
} from "./footerStyles";

const Footer = () => {
  return (
    <StyledFooterContainer>
      <FooterGithubLink href="https://github.com/carrigan223/Vanilla_Node">
        <StyledFaGithub />
      </FooterGithubLink>

      <StyledFoooterText>
        Task Tracker Created By Andrew Carrigan 2021
      </StyledFoooterText>
    </StyledFooterContainer>
  );
};

export default Footer;
