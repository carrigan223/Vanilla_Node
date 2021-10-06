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

export { StyledSubmitButton };
