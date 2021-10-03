import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const TodoSection = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 80vw;
    margin-left: auto;
  }
`;

const TodoCardViewBody = styled.div`
  display: flex;
  overflow: scroll;

  @media (min-width: 768px) {
    margin-left: auto;
  }

  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
`;
const MainViewContainer = styled.div`
  display: flex;
`;

export { AppContainer, TodoSection, MainViewContainer, TodoCardViewBody };
