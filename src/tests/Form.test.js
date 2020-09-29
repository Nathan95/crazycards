import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import Form from "../components/Form";
import { render, fireEvent, wait } from "@testing-library/react";

it("fill out form and get results of Liquid Card and Anywhere Card", async () => {
  const {
    getByText,
    queryByText,
    getByLabelText,
    getByTestId,
    getAllByTestId
  } = render(<Form />);

  const firstnameInput = getByLabelText("Firstname");
  const lastnameInput = getByLabelText("Lastname");
  const incomeInput = getByLabelText("Income");
  const postcodeInput = getByLabelText("Post code");
  const houseNumberInput = getByLabelText("House Number");

  await wait(() => expect(getByText("Title")).toBeInTheDocument());

  //select item
  fireEvent.change(getByTestId("select"), { target: { value: "mrs" } });
  let titleOptions = getAllByTestId("select-option");
  expect(titleOptions[0].selected).toBeFalsy();
  expect(titleOptions[1].selected).toBeTruthy();
  expect(titleOptions[2].selected).toBeFalsy();

  expect(queryByText("Please add your title")).not.toBeInTheDocument();

  fireEvent.change(firstnameInput, { target: { value: "Jane" } });
  expect(firstnameInput.value).toBe("Jane");

  fireEvent.change(lastnameInput, { target: { value: "Doe" } });
  expect(lastnameInput.value).toBe("Doe");

  fireEvent.change(incomeInput, { target: { value: 100000 } });
  expect(incomeInput.value).toBe("100000");

  fireEvent.change(getByTestId("employment-select"), {
    target: { value: "fulltime" }
  });
  let employmentOptions = getAllByTestId("employment-option");
  expect(employmentOptions[0].selected).toBeFalsy();
  expect(employmentOptions[1].selected).toBeTruthy();
  expect(employmentOptions[2].selected).toBeFalsy();

  fireEvent.change(postcodeInput, { target: { value: "NWE 283" } });
  expect(postcodeInput.value).toBe("NWE 283");

  fireEvent.change(houseNumberInput, { target: { value: "83" } });
  expect(houseNumberInput.value).toBe("83");

  await wait(() => expect(getByText("Submit")).toBeInTheDocument());
  fireEvent.click(getByText("Submit"));

  expect(getByText("Anywhere Card")).toBeInTheDocument();
  expect(getByText("Liquid Card")).toBeInTheDocument();
});

it("fill out form and get results of Student Card and Anywhere Card", async () => {
  const {
    getByText,
    queryByText,
    getByLabelText,
    getByTestId,
    getAllByTestId
  } = render(<Form />);

  const firstnameInput = getByLabelText("Firstname");
  const lastnameInput = getByLabelText("Lastname");
  const incomeInput = getByLabelText("Income");
  const postcodeInput = getByLabelText("Post code");
  const houseNumberInput = getByLabelText("House Number");

  await wait(() => expect(getByText("Title")).toBeInTheDocument());

  //select item
  fireEvent.change(getByTestId("select"), { target: { value: "mrs" } });
  let titleOptions = getAllByTestId("select-option");
  expect(titleOptions[0].selected).toBeFalsy();
  expect(titleOptions[1].selected).toBeTruthy();
  expect(titleOptions[2].selected).toBeFalsy();

  expect(queryByText("Please add your title")).not.toBeInTheDocument();

  fireEvent.change(firstnameInput, { target: { value: "Jane" } });
  expect(firstnameInput.value).toBe("Jane");

  fireEvent.change(lastnameInput, { target: { value: "Doe" } });
  expect(lastnameInput.value).toBe("Doe");

  fireEvent.change(incomeInput, { target: { value: 10000 } });
  expect(incomeInput.value).toBe("10000");

  fireEvent.change(getByTestId("employment-select"), {
    target: { value: "student" }
  });
  let employmentOptions = getAllByTestId("employment-option");
  expect(employmentOptions[0].selected).toBeTruthy();
  expect(employmentOptions[1].selected).toBeFalsy();
  expect(employmentOptions[2].selected).toBeFalsy();

  fireEvent.change(postcodeInput, { target: { value: "NWE 283" } });
  expect(postcodeInput.value).toBe("NWE 283");

  fireEvent.change(houseNumberInput, { target: { value: "83" } });
  expect(houseNumberInput.value).toBe("83");

  await wait(() => expect(getByText("Submit")).toBeInTheDocument());
  fireEvent.click(getByText("Submit"));

  expect(getByText("Anywhere Card")).toBeInTheDocument();
  expect(getByText("Student Life")).toBeInTheDocument();
});

it("fill out form and get results of Anywhere Card, Liquid Card and Student Life", async () => {
  const {
    getByText,
    queryByText,
    getByLabelText,
    getByTestId,
    getAllByTestId
  } = render(<Form />);

  const firstnameInput = getByLabelText("Firstname");
  const lastnameInput = getByLabelText("Lastname");
  const incomeInput = getByLabelText("Income");
  const postcodeInput = getByLabelText("Post code");
  const houseNumberInput = getByLabelText("House Number");

  await wait(() => expect(getByText("Title")).toBeInTheDocument());

  //select item
  fireEvent.change(getByTestId("select"), { target: { value: "mrs" } });
  let titleOptions = getAllByTestId("select-option");
  expect(titleOptions[0].selected).toBeFalsy();
  expect(titleOptions[1].selected).toBeTruthy();
  expect(titleOptions[2].selected).toBeFalsy();

  expect(queryByText("Please add your title")).not.toBeInTheDocument();

  fireEvent.change(firstnameInput, { target: { value: "Jane" } });
  expect(firstnameInput.value).toBe("Jane");

  fireEvent.change(lastnameInput, { target: { value: "Doe" } });
  expect(lastnameInput.value).toBe("Doe");

  fireEvent.change(incomeInput, { target: { value: 100000 } });
  expect(incomeInput.value).toBe("100000");

  fireEvent.change(getByTestId("employment-select"), {
    target: { value: "student" }
  });
  let employmentOptions = getAllByTestId("employment-option");
  expect(employmentOptions[0].selected).toBeTruthy();
  expect(employmentOptions[1].selected).toBeFalsy();
  expect(employmentOptions[2].selected).toBeFalsy();

  fireEvent.change(postcodeInput, { target: { value: "NWE 283" } });
  expect(postcodeInput.value).toBe("NWE 283");

  fireEvent.change(houseNumberInput, { target: { value: "83" } });
  expect(houseNumberInput.value).toBe("83");

  await wait(() => expect(getByText("Submit")).toBeInTheDocument());
  fireEvent.click(getByText("Submit"));

  expect(getByText("Anywhere Card")).toBeInTheDocument();
  expect(getByText("Liquid Card")).toBeInTheDocument();
  expect(getByText("Student Life")).toBeInTheDocument();
});

it("fill out form and get results of Anywhere Card", async () => {
  const {
    getByText,
    queryByText,
    getByLabelText,
    getByTestId,
    getAllByTestId
  } = render(<Form />);

  const firstnameInput = getByLabelText("Firstname");
  const lastnameInput = getByLabelText("Lastname");
  const incomeInput = getByLabelText("Income");
  const postcodeInput = getByLabelText("Post code");
  const houseNumberInput = getByLabelText("House Number");

  await wait(() => expect(getByText("Title")).toBeInTheDocument());

  //select item
  fireEvent.change(getByTestId("select"), { target: { value: "mrs" } });
  let titleOptions = getAllByTestId("select-option");
  expect(titleOptions[0].selected).toBeFalsy();
  expect(titleOptions[1].selected).toBeTruthy();
  expect(titleOptions[2].selected).toBeFalsy();

  expect(queryByText("Please add your title")).not.toBeInTheDocument();

  fireEvent.change(firstnameInput, { target: { value: "Jane" } });
  expect(firstnameInput.value).toBe("Jane");

  fireEvent.change(lastnameInput, { target: { value: "Doe" } });
  expect(lastnameInput.value).toBe("Doe");

  fireEvent.change(incomeInput, { target: { value: 10000 } });
  expect(incomeInput.value).toBe("10000");

  fireEvent.change(getByTestId("employment-select"), {
    target: { value: "parttime" }
  });
  let employmentOptions = getAllByTestId("employment-option");
  expect(employmentOptions[0].selected).toBeFalsy();
  expect(employmentOptions[1].selected).toBeFalsy();
  expect(employmentOptions[2].selected).toBeTruthy();

  fireEvent.change(postcodeInput, { target: { value: "NWE 283" } });
  expect(postcodeInput.value).toBe("NWE 283");

  fireEvent.change(houseNumberInput, { target: { value: "83" } });
  expect(houseNumberInput.value).toBe("83");

  await wait(() => expect(getByText("Submit")).toBeInTheDocument());
  fireEvent.click(getByText("Submit"));

  expect(getByText("Anywhere Card")).toBeInTheDocument();
});

it("don't fill out form, submit and get validation messages", async () => {
  const { getByText, queryByText } = render(<Form />);

  await wait(() => expect(getByText("Title")).toBeInTheDocument());

  await wait(() => expect(getByText("Submit")).toBeInTheDocument());
  fireEvent.click(getByText("Submit"));

  expect(queryByText("Please add your title")).toBeInTheDocument();
  expect(queryByText("Please add a firstname")).toBeInTheDocument();
  expect(queryByText("Please add a lastname")).toBeInTheDocument();
  expect(queryByText("Please add your income")).toBeInTheDocument();
  expect(queryByText("Please add your employment")).toBeInTheDocument();
  expect(queryByText("Please add your post code")).toBeInTheDocument();
  expect(queryByText("Please add your house number")).toBeInTheDocument();
});
