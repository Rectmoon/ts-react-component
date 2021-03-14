
import React from "react";

import { IInputProps } from "./Input.types";

import "./Input.less";

const prefix = "rainbow"

const Input: React.FC<IInputProps> = ({ foo }) => (
  <div data-testid="Input" className={prefix + "-Input"}>
    {foo}
  </div>
);

export default Input;
  