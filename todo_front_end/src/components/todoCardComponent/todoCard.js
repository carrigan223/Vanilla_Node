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
  DeleteButtonContainer
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

  const showDescription = () => {
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
            <DropDownButtonContainer onClick={showDescription} type="button">
              <CollapseButton />
            </DropDownButtonContainer>
            <span>{description}</span>
          </ExpandedDescriptionContainer>
        ) : (
          <DropDownButtonContainer onClick={showDescription} type="button">
            <ExpandButton />
          </DropDownButtonContainer>
        )}
        <span>Date To Be Completed: {due_date}</span>
        <span style={{ display: "flex" }}></span>
        <div>{completed ? <Checkmark /> : <Exclamation />}</div>
      </TodoCardContainer>
    </div>
  );
};

export default TodoCard;
