import React, { useState } from "react";
import {
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
} from "./todoCardStyles";
import axios from "axios";

/**
 *
 * @param {TodoObject}
 * @returns Todo Card component displaying todo information
 */

const TodoCard = ({
  todo: { title, description, due_date, completed, id, users },
  userObjects
}) => {
  const [shown, setShown] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const deleteTodo = (id) => {
    setLoading(true);
    const stringedId = id.toString();
    const apiUrl = "http://localhost:5000/api/todos".concat("/", stringedId);
    axios
      .delete(apiUrl)
      .then((res) => {})
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const completeTodo = (id) => {
    setLoading(true);
    const stringedId = id.toString();
    const apiUrl = "http://localhost:5000/api/todos".concat("/", stringedId);
    axios
      .post(apiUrl)
      .then((res) => {})
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });

    console.log(apiUrl);
    console.log(userObjects);
  };

  const showAndHideDescription = () => {
    setShown(!shown);
  };
  return (
    <div>
      <TodoCardContainer>
        <DeleteButtonContainer>
          <DeleteButton onClick={() => deleteTodo(id)}>X</DeleteButton>
        </DeleteButtonContainer>
        <CardHeader>{title}</CardHeader>
        {shown ? (
          <ExpandedDescriptionContainer>
            <DropDownButtonContainer onClick={showAndHideDescription} type="button">
              <CollapseButton />
            </DropDownButtonContainer>
            <span>{description}</span>
          </ExpandedDescriptionContainer>
        ) : (
          <DropDownButtonContainer onClick={showAndHideDescription} type="button">
            <ExpandButton />
          </DropDownButtonContainer>
        )}
        <span>Date To Be Completed: {due_date}</span>
        <span style={{ display: "flex" }}></span>
        <ChangeCompleteButton onClick={() => completeTodo(id)}>
          <div>{completed ? <Checkmark /> : <Exclamation />}</div>
        </ChangeCompleteButton>
      </TodoCardContainer>
    </div>
  );
};

export default TodoCard;
