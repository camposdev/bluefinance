import React from "react";
import { render } from "@testing-library/react";
import Login from "./Login";

describe("Login component", () => {
  it("renders correctly", () => {
    const container = render(<Login />);

    expect(container).toBeTruthy();
  });
});
