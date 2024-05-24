/** @jsxImportSource @emotion/react */
import React, {
  Children,
  cloneElement,
  HTMLAttributes,
  ReactElement,
  ReactNode,
  useId,
} from "react";

import { TextField } from "./TextField";
import { Textarea } from "./Textarea";
import { PhoneNumberField } from "./PhoneNumberField";
import { NumbericField } from "./NumbericField";
import { SearchField } from "./SearchField";
import { InputContainer } from "./container/InputContainer";

type InputTypes = {
  children: ReactElement;
  label?: ReactNode;
  labelSize?: number | string;
  labelColor?: string;
  maxWidth?: number;
  minWidth?: number;
  important?: string;
} & HTMLAttributes<HTMLDivElement>;

export function Input({
  label,
  labelSize,
  labelColor,
  minWidth,
  maxWidth,
  important,
  ...props
}: InputTypes) {
  const child = Children.only(props.children);

  const { error, tolTip } = child?.props ?? {};

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const id = child.props.id ?? useId();

  return (
    <InputContainer
      important={important}
      id={id}
      label={label}
      labelColor={labelColor}
      labelSize={labelSize}
      maxWidth={maxWidth}
      minWidth={minWidth}
      error={error}
      tolTip={tolTip}
    >
      {cloneElement(child, { id, ...child.props })}
    </InputContainer>
  );
}

Input.TextField = TextField;
Input.Textarea = Textarea;
Input.PhoneNumberField = PhoneNumberField;
Input.NumbericField = NumbericField;
Input.SearchField = SearchField;
