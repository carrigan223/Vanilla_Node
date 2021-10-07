import styled from "styled-components";

const StyledSubmitButton = styled.button`
  padding: 10px;
  margin: 10px;
  border: 1px solid rgba(0, 245, 255, 0.1);
  border-radius: 7px;
  background: linear-gradient(
    336deg,
    rgba(0, 0, 255, 0.15) 13%,
    rgba(190, 236, 237, 0.75) 40%
  );
  color: black;
  font-size: 1.25rem;
  font-family: "Abril Fatface";
  box-shadow: 3px 5px 20px lightgray;

  :hover {
    box-shadow: 7px 7px 10px black;
    cursor: pointer;

  }
`;

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

export { SideBarContainer, AddTodoFormContainer,StyledSubmitButton };
