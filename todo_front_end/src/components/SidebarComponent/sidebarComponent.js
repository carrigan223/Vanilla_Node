import React, { useState } from "react";
import {
  SideBarContainer,
  AddTodoFormContainer,
  StyledSubmitButton
} from "./sidebarComponentStyles";
import axios from "axios";

const SidebarComponent = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    due_date: ""
  });

  /**
   * 
   * @param {*} event 
   * takes an event, in this case keystrokes
   * to update formData value based on input value
   */

  const handleTitleInputChange = (event) => {
    event.persist();
    setFormData((values) => ({
      ...values,
      title: event.target.value
    }));
  };

   /**
   * 
   * @param {*} event 
   * takes an event, in this case keystrokes
   * to update formData value based on input value
   */
  const handleDescriptionInputChange = (event) => {
    event.persist();
    setFormData((values) => ({
      ...values,
      description: event.target.value
    }));
  };

   /**
   * 
   * @param {*} event 
   * takes an event, in this case keystrokes
   * to update formData value based on input value
   */
  const handleDueDateInputChange = (event) => {
    event.persist();
    setFormData((values) => ({
      ...values,
      due_date: event.target.value
    }));
  };

  /**
   * handle submit makes a post request using form data
   * for the creation of new todo, at the moment CORS blocks 
   * application/json using text/plain instead
   */

  const handleSubmit = () => {
    const headers = {
      "Content-Type": "text/plain"
    };
    axios
      .post("http://localhost:5000/api/todos", formData, { headers: headers })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
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
        <StyledSubmitButton onClick={handleSubmit}>Add ToDo</StyledSubmitButton>
      </AddTodoFormContainer>
    </SideBarContainer>
  );
};

export default SidebarComponent;
