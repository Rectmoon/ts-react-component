
import React from "react";

import { IInputProps } from "./Input.types";

import "./Input.scss";

const Input: React.FC<IInputProps> = ({ foo }) => (
  <div data-testid="Input" className="foo-bar">
    {foo}
    Input
  </div>
);

export default Input;
  