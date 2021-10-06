import React, { useState } from "react";
import {
  SideBarContainer,
  AddTodoFormContainer
} from "./sidebarComponentStyles";
import SubmitButton from "../submitButtonComponent/submitButton";
import axios from "axios";

const SidebarComponent = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    due_date: ""
  });

  const handleTitleInputChange = (event) => {
    event.persist();
    setFormData((values) => ({
      ...values,
      title: event.target.value
    }));
  };
  const handleDescriptionInputChange = (event) => {
    event.persist();
    setFormData((values) => ({
      ...values,
      description: event.target.value
    }));
  };
  const handleDueDateInputChange = (event) => {
    event.persist();
    setFormData((values) => ({
      ...values,
      due_date: event.target.value
    }));
  };

  const handleSubmit = async () => {
    // store the states in the form data
    const loginFormData = new FormData();
    loginFormData.append("title", formData.title);
    loginFormData.append("description", formData.description);
    loginFormData.append("due_date", formData.due_date);

    try {
      // make axios post request
      const response = await axios({
        method: "post",
        url: "http://localhost:5000/api/todos",
        data: loginFormData,
        headers: { "Content-Type": "multipart/form-data" }
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SideBarContainer>
      <h2>Add To A Todo</h2>
      <AddTodoFormContainer>
        <label>Title</label>
        <input
          id="title"
          type="text"
          placeholder="Title"
          name="title"
          value={formData.firstName}
          onChange={handleTitleInputChange}
        />
        <label>Description</label>
        <input
          id="description"
          type="text"
          placeholder="Description"
          name="description"
          value={formData.description}
          onChange={handleDescriptionInputChange}
        />
        <label>Date To Be Completed</label>
        <input
          id="dueDate"
          type="text"
          placeholder="Due Date"
          name="dueDate"
          value={formData.due_date}
          onChange={handleDueDateInputChange}
        />
        <SubmitButton onClick={() => handleSubmit()} />
      </AddTodoFormContainer>
    </SideBarContainer>
  );
};

export default SidebarComponent;
