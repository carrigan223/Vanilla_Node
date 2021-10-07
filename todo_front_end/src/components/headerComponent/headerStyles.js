import styled from "styled-components";

const HeaderContainer = styled.header`
  background: rgb(0, 0, 0);
  background: linear-gradient(
    356deg,
    rgba(0, 0, 0, .8) 25%,
    rgba(190, 236, 237, .7) 120%
  );
  color: whitesmoke;
  box-shadow: 0px 7px 70px gray;
  width: 100vw;
  height: 14vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  /* margin-bottom: 2rem; */
  font-family: "Noto Sans";
  font-size: 1.55rem;
  border-bottom: 3px solid black;
  position: sticky;
  top: 0;
`;

const AppTitle = styled.h1`
  margin: 0;
  font-size: 4rem;
  font-weight: 700;
  position: fixed;
  letter-spacing: 13px;
  color: white;
  border: 2px solid white;
  border-radius: 12px;
  margin-bottom: 1rem;
  background: black;
  padding: 5px;
  box-shadow: 3px 3px 2px white;
  /* -webkit-text-stroke: 2px rgba(93, 102, 102, 1);
  text-shadow: 3px 3px 2px lightcyan; */
`;

const TodaysDate = styled.span`
  margin-left: auto;
  margin-bottom: auto;
  padding: 10px;
`;

export { AppTitle, HeaderContainer, TodaysDate };
