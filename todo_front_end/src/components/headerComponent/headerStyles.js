import styled from "styled-components";

const HeaderContainer = styled.header`
  background: rgb(255, 255, 255);
  background: linear-gradient(
    356deg,
    rgba(255, 255, 255, 1) 36%,
    rgba(190, 236, 237, 1) 100%
  );
  color: black;
  box-shadow: 0px 7px 70px lightgray;
  width: 100vw;
  height: 14vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  /* margin-bottom: 2rem; */
  font-family: "Abril Fatface";
  font-size: 1.25rem;
  border-bottom: 3px solid black;
  position: sticky;
  top: 0;
`;

const AppTitle = styled.h1`
  margin: 0;
  text-shadow: 2px 2px 25px grey;
  position: fixed;
`;

const TodaysDate = styled.span`
  margin-left: auto;
  margin-bottom: auto;
  padding: 10px;
`;

export { AppTitle, HeaderContainer,TodaysDate };
