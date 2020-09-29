import React, { useState } from "react";
import Inputfield from "./Inputfield";
import Select from "./Select";
import "../css/Form.scss";
import Cardlist from "./Cardlist";
import { employmentOptions, titleOptions } from "../utils/utils";

function Form() {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    income: "",
    employment: "",
    title: "",
    post_code: "",
    house_number: ""
  });
  const [submitForm] = useState(false);
  const [displayResults, setDisplayResults] = useState(false);

  const firstNameRef = React.createRef();
  const incomeRef = React.createRef();
  const lastNameRef = React.createRef();
  const employmentRef = React.createRef();
  const titleRef = React.createRef();
  const postCodeRef = React.createRef();
  const houseNumberRef = React.createRef();

  const handleOnChange = evt => {
    const value = evt.target.value;
    setInput({
      ...input,
      [evt.target.name]: value
    });
  };

  const onHandleSubmit = e => {
    e.preventDefault();

    //validation
    input.title
      ? (titleRef.current.innerHTML = "")
      : (titleRef.current.innerHTML = "Please add your title");
    input.firstName
      ? (firstNameRef.current.innerHTML = "")
      : (firstNameRef.current.innerHTML = "Please add a firstname");
    input.lastName
      ? (lastNameRef.current.innerHTML = "")
      : (lastNameRef.current.innerHTML = "Please add a lastname");
    input.income
      ? (incomeRef.current.innerHTML = "")
      : (incomeRef.current.innerHTML = "Please add your income");
    input.employment
      ? (employmentRef.current.innerHTML = "")
      : (employmentRef.current.innerHTML = "Please add your employment");
    input.post_code
      ? (postCodeRef.current.innerHTML = "")
      : (postCodeRef.current.innerHTML = "Please add your post code");
    input.house_number
      ? (houseNumberRef.current.innerHTML = "")
      : (houseNumberRef.current.innerHTML = "Please add your house number");

    if (
      !input.title ||
      !input.firstName ||
      !input.lastName ||
      !input.income ||
      !input.post_code ||
      !input.house_number
    ) {
      return false;
    }

    setDisplayResults(true);
  };

  return (
    <div
      className={`form__formControl ${
        submitForm ? "form__formControl--submit" : ""
      }`}
    >
      {displayResults ? (
        <Cardlist incomeData={input.income} employmentData={input.employment} />
      ) : null}
      <div
        className={`form__inputContainer ${
          displayResults ? "form__inputContainer--display" : ""
        }`}
      >
        <form onSubmit={onHandleSubmit}>
          <Select
            value={input.title}
            name="title"
            handleChange={handleOnChange}
            label="Title"
            options={titleOptions}
            selectTestId="select"
            optionTestId="select-option"
          />
          <p tabIndex={0} ref={titleRef} style={{ color: "red" }}></p>
          <Inputfield
            type="text"
            label="Firstname"
            name="firstName"
            handleChange={handleOnChange}
            value={input.firstName}
            placeholder="Jane"
          />
          <p tabIndex={0} ref={firstNameRef} style={{ color: "red" }}></p>
          <Inputfield
            type="text"
            name="lastName"
            label="Lastname"
            handleChange={handleOnChange}
            value={input.lastName}
            placeholder="Doe"
          />

          <p tabIndex={0} ref={lastNameRef} style={{ color: "red" }}></p>
          <Inputfield
            type="number"
            name="income"
            label="Income"
            handleChange={handleOnChange}
            value={input.income}
            placeholder="eg. 160000"
          />
          <p tabIndex={0} ref={incomeRef} style={{ color: "red" }}></p>
          <Select
            value={input.employment}
            name="employment"
            handleChange={handleOnChange}
            label="Employment status"
            options={employmentOptions}
            selectTestId="employment-select"
            optionTestId="employment-option"
          />
          <p tabIndex={0} ref={employmentRef} style={{ color: "red" }}></p>
          <Inputfield
            type="text"
            name="post_code"
            label="Post code"
            handleChange={handleOnChange}
            value={input.post_code}
            placeholder="eg. GU14 0JK"
          />
          <p tabIndex={0} ref={postCodeRef} style={{ color: "red" }}></p>
          <Inputfield
            type="number"
            name="house_number"
            label="House Number"
            handleChange={handleOnChange}
            value={input.house_number}
            placeholder="eg. 34"
          />
          <p tabIndex={0} ref={houseNumberRef} style={{ color: "red" }}></p>
          <button
            className="form__submitButton"
            data-testid="submitButton"
            type="submit"
            name="submit"
            id="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
