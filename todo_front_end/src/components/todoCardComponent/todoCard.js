import React, { useState } from "react";
import {
  TodoCardContainer,
  CardHeader,
  Checkmark,
  Exclamation,
  ExpandButton,
  DropDownButtonContainer,
  ExpandedDescriptionContainer,
  CollapseButton
} from "./todoCardStyles";

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

  const showDescription = () => {
    setShown(!shown);
  };
  return (
    <div>
      <TodoCardContainer>
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
