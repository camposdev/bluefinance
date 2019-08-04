import React from "react";
import renderer from "react-test-renderer";
import Flex from "./Flex";

describe("Flex component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Flex><div>1</div><div>2</div></Flex>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
