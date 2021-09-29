import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

const StyledFooterContainer = styled.div`
  width: 100%;
  background: black;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  border-top: 3px solid lightgray;

  @media (min-width: 768px) {
    position: fixed;
    bottom: 0;
  }
`;

const StyledFoooterText = styled.span`
  font-size: 0.75rem;
  font-weight: bold;
`;

const FooterGithubLink = styled.a`
  height: min-content;
  width: min-content;
  color: white;
  display: flex;
  border-radius: 33px;
  box-shadow: 2px 2px 10px white;
  margin: 15px;

  :hover {
    color: cyan;
  }
`;
const StyledFaGithub = styled(FaGithub)`
  height: 27px;
  width: 27px;
`;

export {
  FooterGithubLink,
  StyledFoooterText,
  StyledFooterContainer,
  StyledFaGithub
};
