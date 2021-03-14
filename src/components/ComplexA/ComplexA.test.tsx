
import React from "react";
import { render } from "@testing-library/react";

import ComplexA from "./ComplexA";
import { IComplexAProps } from "./ComplexA.types";

describe("Test Component", () => {
  let props: IComplexAProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<ComplexA {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("ComplexA");

    expect(component).toHaveTextContent("harvey was here");
  });
});
