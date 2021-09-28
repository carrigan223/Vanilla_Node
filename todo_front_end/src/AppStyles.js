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
  }
`;

export { AppContainer, TodoSection };
