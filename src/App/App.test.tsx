
import React from "react";
import { render } from "@testing-library/react";

import App from "./App";
import { AppProps } from "./App.types";

describe("Test Component", () => {
  let props: AppProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<App {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("App");

    expect(component).toHaveTextContent("harvey was here");
  });
});
