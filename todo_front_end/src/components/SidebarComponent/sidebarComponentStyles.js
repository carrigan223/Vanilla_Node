import styled from "styled-components";

const SideBarContainer = styled.div`
  @media (min-width: 768px) {
    border-right: 2px solid black;
    width: 20%;
    margin-right: auto;
    min-height: 87vh;
    position: fixed;
  }
  @media (max-width: 768px) {
    display: none;
  }

  > h2 {
    font-family: "Abril Fatface";
    text-align: center;
    font-size: 1.75rem;
    padding: 10px;
  }
`;

const AddTodoFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  > label {
    margin: none;
    font-family: "Abril Fatface";
    font-size: 1.15rem;
  }
  > input {
    margin: 15px;
    height: 1.5rem;
    width: 70%;
    border-bottom: 1px solid grey;
    border-radius: 5px;
    box-shadow: 3px 2px 10px grey;

    :hover {
      border-bottom: 1px solid white;
      box-shadow: 3px 2px 10px cyan;
    }

    :focus {
      border-bottom: 1px solid cyan;
      outline: none;
      box-shadow: 3px 2px 10px cyan;
    }
  }
`;

export { SideBarContainer, AddTodoFormContainer };
