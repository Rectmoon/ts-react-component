
import React from "react";

import { IComplexAProps } from "./ComplexA.types";
import Button from '../Button'

import "./ComplexA.less";


const ComplexA: React.FC<IComplexAProps> = ({ foo }) => (
  <div data-testid="ComplexA" className='complex-a'>
    <Button foo='ComplexA'/>
  </div>
);

export default ComplexA;
  