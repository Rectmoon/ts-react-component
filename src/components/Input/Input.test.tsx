
import React from "react";
import { render } from "@testing-library/react";

import Input from "./Input";
import { IInputProps } from "./Input.types";

describe("Test Component", () => {
  let props: IInputProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Input {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Input");

    expect(component).toHaveTextContent("harvey was here");
  });
});
