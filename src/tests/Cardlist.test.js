import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import Cardlist from "../components/Cardlist";
import { render, fireEvent, wait } from "@testing-library/react";

it("click card and check if credit is clickable and adds up", async () => {
  const { getByText, queryByText } = render(
    <Cardlist incomeData="10000" employmentData="student" />
  );

  await wait(() => expect(getByText("Total Credit: £0")).toBeInTheDocument());
  let anywhereCard = getByText("Anywhere Card");
  let studentLife = getByText("Student Life");
  expect(anywhereCard).toBeInTheDocument();
  fireEvent.click(anywhereCard);
  await wait(() =>
    expect(queryByText("Total Credit: £300")).toBeInTheDocument()
  );
  fireEvent.click(studentLife);
  await wait(() =>
    expect(queryByText("Total Credit: £1500")).toBeInTheDocument()
  );
  fireEvent.click(studentLife);
  await wait(() =>
    expect(queryByText("Total Credit: £300")).toBeInTheDocument()
  );
  fireEvent.click(anywhereCard);
  await wait(() => expect(getByText("Total Credit: £0")).toBeInTheDocument());
});
