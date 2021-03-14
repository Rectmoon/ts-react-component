
import React from "react";

import { IButtonProps } from "./Button.types";

import './Button.less'

const Button: React.FC<IButtonProps> = ({ foo }) => (
  <div data-testid="Button" className='foo-bar'>
    {foo}
  </div>
);

export default Button;
  