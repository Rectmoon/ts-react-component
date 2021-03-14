
import React from "react";
import { render } from "@testing-library/react";

import Button from "./Button";
import { IButtonProps } from "./Button.types";

describe("Test Component", () => {
  let props: IButtonProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Button {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Button");

    expect(component).toHaveTextContent("harvey was here");
  });
});
