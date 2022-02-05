import React from "react";
import { CheckBox, TextBox } from "./FormElements";

export default function EnrollmentForm({ setStudents }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      github: event.target.github.value,
      gender: event.target.gender.value,
      skills: {
        java: event.target.java.checked,
        html: event.target.html.checked,
        css: event.target.css.checked,
      },
    };
    event.target.reset();
    setStudents((oldStudents) => {
      return [...oldStudents, data];
    });
  };

  return (
    <form className="EnrollmentForm" onSubmit={handleSubmit}>
      <TextBox eleName="name" required={true} />
      <TextBox eleName="email" required={true} />
      <TextBox eleName="github" />
      <div className="formElement">
        <label htmlFor="gender">gender: </label>
        <select name="gender" defaultValue="" required={true}>
          <option value="" hidden>
            Select your gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="unknown">Prefer Not To Say</option>
        </select>
      </div>
      <div className="formElement">
        <label htmlFor="skills">Skills:</label>
        <div className="checkboxHolder" name="skills">
          <CheckBox eleName="java" />
          <CheckBox eleName="html" />
          <CheckBox eleName="css" />
        </div>
      </div>
      <div className="btnHolder">
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </div>
    </form>
  );
}
