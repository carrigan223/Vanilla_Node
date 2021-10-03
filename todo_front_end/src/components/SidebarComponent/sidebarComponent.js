import React, { useState } from "react";
import {
  SideBarContainer,
  AddTodoFormContainer
} from "./sidebarComponentStyles";
import SubmitButton from "../submitButtonComponent/submitButton";

const SidebarComponent = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    due_date: ""
  });
  return (
    <SideBarContainer>
      <h2>Add To A Todo</h2>
      <AddTodoFormContainer>
        <label>Title</label>
        <input/>
        <label>Description</label>
        <input />
        <label>Date To Be Completed</label>
        <input />
        <SubmitButton />
      </AddTodoFormContainer>
    </SideBarContainer>
  );
};

export default SidebarComponent;
