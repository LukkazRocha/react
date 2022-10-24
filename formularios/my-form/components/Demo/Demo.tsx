import React from "react";
import { InputFloatLabel } from '../InputFloatLabel/index'

import "antd/dist/antd.css";

export const Demo = () => {
  return (
      <>
        <InputFloatLabel placeholder="First Name*" />
        <InputFloatLabel placeholder ="Last Name*" />
        <InputFloatLabel placeholder="Organization*" />
        <InputFloatLabel type="email" placeholder="Email*" />
      </>      
  );
};