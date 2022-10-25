import React, { useState } from "react";
import { Input, InputProps } from "antd";

export type InputFloatLabel = {
  onClickButton?: React.MouseEventHandler<HTMLElement>;
}

export const InputFloatLabel = ({
    placeholder, 
    value,
    ...rest
    } : InputProps) => {
  const [focus, setFocus] = useState(false);

  const labelClass =
    focus || (value && value.toString().length !== undefined) ? "label label-float" : "label";

  return (
    <div
      className="float-label"
      onBlur={() => setFocus(false)}
      onFocus={() => {
        setFocus(true);
        console.log(value);
      }}
    >
      <Input {...rest} />
      <label className={labelClass}>{placeholder}</label>
    </div>
  );
};
