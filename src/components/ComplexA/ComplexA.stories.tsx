
import React from "react";
import ComplexA from "./ComplexA";

export default {
    title: "ComplexA"
};

export const WithBar = () => <ComplexA foo="bar" />;

export const WithBaz = () => <ComplexA foo="baz" />;
