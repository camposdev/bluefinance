import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from "@testing-library/react";
import Home from "./Home";

describe("Home component", () => {
  it("renders correctly", () => {
    const container = render(<Router><Home /></Router>);

    expect(container).toBeTruthy();
  });
});
