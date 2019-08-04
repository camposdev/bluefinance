import React from "react";
import renderer from "react-test-renderer";
import Container from "./Container";

describe("Container component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Container><p>Lorem ipsum</p></Container>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
