import styled from "styled-components";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { BiChevronsDown, BiChevronsUp } from "react-icons/bi";

const DeleteButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const DeleteButton = styled.button`
  font-family: "Abril Fatface";
  font-size: 1rem;
  background: black;
  border-radius: 100%;
  color: white;
  -webkit-text-stroke: 1px white;
  border: none;
  margin: 15px;

  :hover {
    background: darkred;
    box-shadow: 2px 3px 3px grey;
    color: black;
    -webkit-text-stroke: none;
  }
`;

const TodoCardContainer = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  margin-top: auto;
  margin: 10px 5px;
  border-radius: 13px;
  border: 1px solid lightgrey;
  box-shadow: 2px 3px 15px lightgrey;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    356deg,
    rgba(255, 255, 255, 1) 66%,
    rgba(190, 236, 237, 0.35) 100%
  );

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20vw;
    margin: 15px;
  }

  @media (max-width: 768px) {
    width: 80vw;
  }
`;

const CardHeader = styled.h2`
  font-family: "Abril Fatface";
`;

const Checkmark = styled(FaCheckCircle)`
  color: darkgreen;
  box-shadow: 2px 2px 10px black;
  border-radius: 33px;
  border: 3px solid white;

  :hover {
    box-shadow: 2px 2px 10px green;
  }
`;

const Exclamation = styled(FaExclamationCircle)`
  color: red;
  box-shadow: 2px 2px 10px black;
  border-radius: 33px;
  border: 3px solid white;
  :hover {
    box-shadow: 2px 2px 10px red;
  }
`;

const ExpandButton = styled(BiChevronsDown)`
  font-size: 1.65rem;
`;

const CollapseButton = styled(BiChevronsUp)`
  font-size: 1.65rem;
`;

const DropDownButtonContainer = styled.button`
  border: none;
  border-radius: 33px;
  background: none;

  :hover {
    color: cyan;
  }
`;

const ExpandedDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChangeCompleteButton = styled.button`
  border: none;
  background: transparent;
  margin-bottom: 10px;
  border-radius: 33px;
  :hover {
    cursor: pointer;
  }
`;

export {
  TodoCardContainer,
  CardHeader,
  Checkmark,
  Exclamation,
  ExpandButton,
  DropDownButtonContainer,
  ExpandedDescriptionContainer,
  CollapseButton,
  DeleteButton,
  DeleteButtonContainer,
  ChangeCompleteButton
};
