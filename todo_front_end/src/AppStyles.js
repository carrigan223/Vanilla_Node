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

export { AppContainer, TodoSection };
